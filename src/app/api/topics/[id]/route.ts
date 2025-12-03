import connectMongoDB from "@/libs/mongodb";
import { NextResponse, NextRequest } from "next/server";
import Topic from "@/models/topic";

// ✅ GET (단일 토픽 조회)
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ await 추가
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/topics/[id]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ✅ PUT (토픽 수정)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ await 추가
    const { newTitle: title, newDescription: description } =
      await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and Description are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Topic updated", topic: updatedTopic },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT /api/topics/[id]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
