import { supabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { data: courses, error } = await supabase
    .from("courses_test")
    .select("* , lessons_test(name)");
  if (error) {
    console.error(error);
    throw new Error("Courses can not be reach");
  }
  return NextResponse.json(courses);
}

export async function POST(request) {
  const reqData = await request.json();
  const query = { ...reqData };
  const { data, error } = await supabase.from("courses").insert(query);

  if (error) {
    return Response.json({
      message: "Cannot create new course",
      error,
    });
  }
  return Response.json({
    message: "Create new course successfully",
    newCourse: reqData,
  });
}
