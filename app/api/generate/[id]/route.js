import GeneratedIcon from "../../../../models/generatedIcon";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OpenAI_KEY });
import { NextResponse } from "next/server";
import User from "../../../../models/User";
import { connectMongoDB } from "../../../../lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request, { params }) {
  const { prompt, color, style, numIcons } = await request.json();

  await connectMongoDB();

  if (!prompt || !style || !color || !numIcons) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  // redeem credits
  const user = await User.findById(params.id);
  // check if user has enough credits
  // if (user.credits < numIcons || user.credits === 0) {
  //   return NextResponse.json(
  //     { message: "Insufficient credits" },
  //     { status: 400 }
  //   );
  // }

  // Create full prompt with all parameters
  const fullPrompt = `App icon, ${prompt}, ${
    color && color + ","
  } ${style} style`;

  const model = "dall-e-3";
  const requests = [];

  // Create multiple requests based on numIcons
  for (let i = 0; i < numIcons; i++) {
    requests.push(
      openai.images.generate({
        prompt: fullPrompt,
        model,
        n: 1,
        quality: "hd",
        size: "1024x1024",
      })
    );
  }

  // Execute all requests in parallel
  const responses = await Promise.all(requests);

  // Process responses
  const generatedIcons = [];
  for (let i = 0; i < responses.length; i++) {
    const image = responses[i].data[0].url;

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: "iconcraftai",
      public_id: `${prompt}`,
      transformation: { flags: "attachment" },
    });

    const generatedIcon = await GeneratedIcon.create({
      user: params.id,
      prompt,
      fullPrompt,
      color,
      style,
      model,
      image: uploadedImage.secure_url,
    });

    generatedIcons.push(generatedIcon);
  }

  // Deduct credits from user
  // user.credits -= numIcons;
  await user.save();

  return NextResponse.json(generatedIcons, { status: 200 });
}
