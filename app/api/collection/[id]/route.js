import GeneratedIcon from "../../../../models/generatedIcon";
import { NextResponse } from "next/server";
import User from "../../../../models/User";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function GET(request, { params }) {
  await connectMongoDB();

  //   get user icons from db
  const userIcons = await GeneratedIcon.find({ user: params.id });

  return NextResponse.json(userIcons, { status: 200 });
}
