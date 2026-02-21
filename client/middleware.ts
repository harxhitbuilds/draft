import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = !!token;

  const isPrivateRoute =
    pathname.startsWith("/home/you") || pathname.startsWith("/home/post");
  const isAuthRoute = pathname.startsWith("/auth");

  if (isPrivateRoute && !isAuthenticated) {
    const authUrl = new URL("/auth", req.url);

    authUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(authUrl);
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
