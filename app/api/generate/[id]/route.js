import GeneratedIcon from "@/models/generatedIcon";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OpenAI_KEY });
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { prompt, color, style, numIcons } = await request.json();
  const fullPrompt = `App icon, ${prompt}, ${
    color && color + ","
  } ${style} style`;

  const model = "dall-e-3";

  const response = await openai.images.generate({
    prompt: fullPrompt,
    model,
    n: 1,
    quality: "hd",
    size: "1024x1024",
  });

  const image = response.data[0].url;

  const generatedIcon = await GeneratedIcon.create({
    user: params.id,
    prompt: fullPrompt,
    color,
    style,
    model,
    image,
    numIcons,
  });

  return NextResponse.json(generatedIcon, { status: 200 });
}
