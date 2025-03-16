import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { successResponse, errorResponse } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
  try {
    const { tag } = await req.json();
    if (!tag) {
      return errorResponse("Tag is required", 400);
    }

    revalidateTag(tag);
    return successResponse({ revalidated: true });
  } catch (error) {
    return errorResponse(error);
  }
}
