import User from "../../../../../models/user";
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";

export async function DELETE(request, { params }) {
  await connectMongoDB();

  const userId = params.id;

  // Check if the user exists
  const user = await User.findById(userId);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // If the user exists, delete it
  await User.findByIdAndDelete(userId);
  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}
