import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-utils";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return errorResponse("Missing required fields", 400);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return errorResponse("User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    return successResponse({ user }, 201);
  } catch (error) {
    console.error("User creation error:", error);
    return errorResponse("Failed to create user", 500);
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
    return successResponse(users);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...updateData } = await req.json(); // Destructure id and update data

    if (!id) {
      return errorResponse("ID is required for update.", 400);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    if (!updatedUser) {
      return errorResponse("User not found.", 404);
    }

    return successResponse("User updated successfully.", 200);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host")}`); // Create a URL object
    const userId = url.searchParams.get("id"); // Get user ID from query parameter

    if (!userId) {
      return errorResponse("User ID is required.", 400);
    }

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    if (!deletedUser) {
      return errorResponse("User not found.", 404);
    }

    return successResponse("User deleted successfully.", 200);
  } catch (error) {
    return errorResponse(error);
  }
}
