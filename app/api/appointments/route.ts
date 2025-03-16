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
    const session = await getServerSession(authOptions);
    if (!session) return errorResponse("Unauthorized", 401);

    const searchParams = req.nextUrl.searchParams;
    const filter = searchParams.get("filter") || "upcoming";
    const userId = session.user.id;

    const appointments = await cacheData(
      `appointments-${userId}-${filter}`,
      [CACHE_TAGS.appointments],
      async () => {
        return await prisma.appointment.findMany({
          where: {
            customerId: userId,
            date:
              filter === "upcoming" ? { gte: new Date() } : { lt: new Date() },
          },
          include: {
            business: true,
            service: true,
            employee: {
              include: {
                user: true,
              },
            },
          },
          orderBy: {
            date: filter === "upcoming" ? "asc" : "desc",
          },
        });
      }
    );

    return successResponse(appointments);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return errorResponse("Unauthorized", 401);

    const data = await req.json();
    const appointment = await prisma.appointment.create({
      data: {
        ...data,
        customerId: session.user.id,
      },
    });
    return successResponse(appointment, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
