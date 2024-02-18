import { NextResponse } from "next/server";
import download from "image-downloader";
import path from "path";
export async function POST(request, { params }) {
  const { url } = await request.json();

  const options = {
    url
  };

  download
    .image(options)
    .then(({ filename }) => {
      console.log("Saved to", filename);
    })
    .catch((err) => console.error(err));

  return NextResponse.json("image downloaded", { status: 200 });
}
