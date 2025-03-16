import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

export const CACHE_TAGS = {
  appointments: "appointments",
  businesses: "businesses",
  services: "services",
  employees: "employees",
  reviews: "reviews",
  users: "users",
};

export async function cacheData<T>(
  key: string,
  tags: string[],
  fetchData: () => Promise<T>
): Promise<T> {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    throw error;
  }
}

export const successResponse = (data: any, status = 200) => {
  return NextResponse.json({ success: true, data }, { status });
};

export const errorResponse = (error: any, status = 500) => {
  const message = error instanceof Error ? error.message : error;
  return NextResponse.json({ success: false, error: message }, { status });
};
