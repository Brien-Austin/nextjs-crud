import connectMongoDB from "@/libs/mongodb";
import Destinations from "@/models/destination";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, location } = await request.json();
  await connectMongoDB();
  await Destinations.create({ name, location });
  return NextResponse.json(
    {
      message: "Destination created successfully",
    },
    {
      status: 201,
    }
  );
}

export async function GET() {
  await connectMongoDB();
  const destinations = await Destinations.find();
  return NextResponse.json(
    {
      destinations,
    },
    {
      status: 200,
    }
  );
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Destinations.findByIdAndDelete(id);
  return NextResponse.json({
    message: "Destination deleted successfully",
  });
}
