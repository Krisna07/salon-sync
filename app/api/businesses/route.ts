import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  successResponse,
  errorResponse,
  cacheData,
  CACHE_TAGS,
} from "@/lib/api-utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const businesses = await cacheData(
      `businesses-${query}-${page}-${limit}`,
      [CACHE_TAGS.businesses],
      async () => {
        return await prisma.business.findMany({
          where: {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { description: { contains: query, mode: "insensitive" } },
            ],
          },
          include: {
            services: true,
            reviews: {
              select: {
                rating: true,
              },
            },
          },
          skip: (page - 1) * limit,
          take: limit,
        });
      }
    );

    return successResponse(businesses);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return errorResponse("Unauthorized", 401);

    const data = await req.json();
    const business = await prisma.business.create({
      data: {
        ...data,
        ownerId: session.user.id,
      },
    });
    return successResponse(business, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
