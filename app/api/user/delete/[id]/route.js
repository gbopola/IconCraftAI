import User from "@/models/user";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "User is not authorised" },
      { status: 401 }
    );
  }

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
