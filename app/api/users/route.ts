import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // For password hashing

const prisma = new PrismaClient();

// Handle POST requests (create a new user)
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password, fullName, phone, role } = body;
    // console.log(body);

    // Validate user data
    if (!email || !password || !fullName || !role) {
      return NextResponse.json({
        status: 400,
        message: "Email,  password, fullName, and role are required.",
      });
    }

    // Check for existing user or username conflicts
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({
        status: 409,
        message: "User already exists, please sign in.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12); // Increased salt rounds for better security

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        phone,
        role,
      },
    });

    return NextResponse.json({
      status: 200,
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      status: 500,
      message: "Error creating user.",
    });
  }
};

// Handle PUT requests (update user information)
export const PUT = async (req: NextRequest) => {
  try {
    const { id, ...updateData } = await req.json(); // Destructure id and update data

    if (!id) {
      return NextResponse.json({
        status: 400,
        message: "ID is required for update.",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    if (!updatedUser) {
      return NextResponse.json({ status: 404, message: "User not found." });
    }

    return NextResponse.json({
      status: 200,
      message: "User updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ status: 500, message: "Error updating user." });
  }
};

// Handle DELETE requests (delete a user)
export const DELETE = async (req: NextRequest) => {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host")}`); // Create a URL object
    const userId = url.searchParams.get("id"); // Get user ID from query parameter

    if (!userId) {
      return NextResponse.json({
        status: 400,
        message: "User ID is required.",
      });
    }

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    if (!deletedUser) {
      return NextResponse.json({ status: 404, message: "User not found." });
    }

    return NextResponse.json({
      status: 200,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ status: 500, message: "Error deleting user." });
  }
};
