import { supabase } from "@/utils/db";

export async function POST(request) {
  const reqData = await request.json();
  console.log(`reqData from create new Lesson`, reqData);
  const newLesson = {
    lesson_id: reqData.lesson_id,
    course_id: reqData.course_id,
    name: reqData.name,
    lesson_number: reqData.lesson_number,
  };

  try {
    const { data, error } = await supabase.from("lessons").insert([
      {
        lesson_id: reqData.lesson_id,
        course_id: reqData.course_id,
        name: reqData.name,
        lesson_number: reqData.lesson_number,
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
      },
    ]);
    if (error) {
      throw new Error(`error from supabase when create new lesson`, error);
      // return Response.json({
      //   message: "Cannot create new lesson",
      //   error: error,
      // });
    }
  } catch (error) {
    console.log(`error before sending data to lessons table`, error);
    return Response.json({
      message: `error before sending data to lessons table`,
      error: error,
    });
  }
  return Response.json({ message: "Create new lesson successfully" });
}

export async function DELETE(request) {
  // const reqData = await request.json();
  // console.log(`reqData`);
  return Response.json({ message: "Delete all lessons successfully" });
}
