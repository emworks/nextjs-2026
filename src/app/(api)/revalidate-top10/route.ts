import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  revalidateTag("getTop10Rackets", { expire: 5 });

  return NextResponse.json({ text: "ok" });
}
