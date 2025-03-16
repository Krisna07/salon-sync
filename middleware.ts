import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token && req.nextUrl.pathname.startsWith("/api")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/api/appointments/:path*",
    "/api/businesses/:path*",
    "/api/services/:path*",
    "/api/reviews/:path*",
    "/api/profile/:path*",
  ],
};
