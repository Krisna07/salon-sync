import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  successResponse,
  errorResponse,
  cacheData,
  CACHE_TAGS,
} from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const businessId = searchParams.get("businessId");

    if (!businessId) {
      return errorResponse("Business ID is required", 400);
    }

    const services = await cacheData(
      `services-${businessId}`,
      [CACHE_TAGS.services],
      async () => {
        return await prisma.service.findMany({
          where: {
            businessId,
          },
          orderBy: {
            name: "asc",
          },
        });
      }
    );

    return successResponse(services);
  } catch (error) {
    return errorResponse(error);
  }
}
