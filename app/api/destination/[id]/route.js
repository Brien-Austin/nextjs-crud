import connectMongoDB from "@/libs/mongodb";
import Destinations from "@/models/destination";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newLocation: location } = await request.json();
  await connectMongoDB();
  await Destinations.findByIdAndUpdate(id, { name, location });
  return NextResponse.json({
    message: "Destination Updated successfully",
  });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const destination = await Destinations.findOne({ _id: id });

  const { name, location } = destination;

  return NextResponse.json(
    { name, location },
    { status: 200, message: "Retrieved Data" }
  );
}
