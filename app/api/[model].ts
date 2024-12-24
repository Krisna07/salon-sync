import { NextApiRequest, NextApiResponse } from "next";
import {
  PrismaClient,
  User,
  Business,
  Employee,
  Service,
  TimeSlot,
  Appointment,
  Review,
} from "@prisma/client";

const prisma = new PrismaClient();

type Model =
  | "User"
  | "Business"
  | "Employee"
  | "Service"
  | "TimeSlot"
  | "Appointment"
  | "Review";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { model } = req.query;

  // Ensure the model is a valid string and exists in the Prisma schema
  const validModels: Model[] = [
    "User",
    "Business",
    "Employee",
    "Service",
    "TimeSlot",
    "Appointment",
    "Review",
  ];

  // Check if model is provided and is valid
  if (typeof model !== "string" || !validModels.includes(model as Model)) {
    return res.status(400).json({ error: "Invalid or missing model" });
  }

  switch (method) {
    case "GET":
      const data = await prisma[model as keyof PrismaClient].findMany(); // Type assertion here
      res.status(200).json(data);
      break;
    case "POST":
      const newData = await prisma[model as keyof PrismaClient].create({
        data: req.body,
      });
      res.status(201).json(newData);
      break;
    case "PUT":
      const { id } = req.body;
      const updatedData = await prisma[model as keyof PrismaClient].update({
        where: { id },
        data: req.body,
      });
      res.status(200).json(updatedData);
      break;
    case "DELETE":
      const { id: deleteId } = req.body;
      await prisma[model as keyof PrismaClient].delete({
        where: { id: deleteId },
      });
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
