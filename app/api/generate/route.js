import GeneratedIcon from "@/models/generatedIcon";
import OpenAI from "openai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const openai = new OpenAI({ apiKey: process.env.OpenAI_KEY });
import { NextResponse } from "next/server";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (session) {
    const { prompt, color, model, style, numIcons } = await request.json();
    const fullPrompt = `App icon, ${prompt}, ${
      color && color + ","
    } ${style} style`;

    const response = await openai.images.generate({
      prompt: fullPrompt,
      model,
      size: "1024x1024",
    });

    image = response.data.data[0].url;

    const generatedIcon = await GeneratedIcon.create({
      prompt: fullPrompt,
      color,
      style,
      model,
      image,
      numIcons,
    });

    return NextResponse.json(generatedIcon, { status: 200 });
  }

  return NextResponse.json(
    { message: "User is not authorised" },
    { status: 401 }
  );
}
