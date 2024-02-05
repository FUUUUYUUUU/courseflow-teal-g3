import { supabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("courses_test")
    .select("* , lessons_test(name)");
  if (error) {
    console.error(error);
    throw new Error("Courses can not be reach");
  }
  return NextResponse.json(
    { message: "Fetching Successfully", data },
    { status: 200 }
  );
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

// import { supabase } from "@/utils/db.js";
// import { NextResponse } from "next/server";
// import { useSearchParams } from "next/navigation";

// export async function GET(request, { params }) {
//   const searchParams = request.nextUrl.searchParams;
//   const search = searchParams.get("search");
//   console.log(search);
//   const { data, error } = await supabase
//     .from("courses_test")
//     .select("* , lessons_test (name)")
//     .ilike("name", `%${search}%`);

//   if (error) {
//     console.error(error);
//     throw new Error("Courses can not be reach");
//   }
//   return NextResponse.json({ data });
// }
