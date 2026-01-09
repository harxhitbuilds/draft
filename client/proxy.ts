import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/auth"];
const ONBOARD_ROUTE = "/on-board";
const HOME_PAGE = "/home";

export function proxy(req: NextRequest) {
  const session = req.cookies.get("__session")?.value;
  const onboardCookie = req.cookies.get("__onboard")?.value;

  const { pathname } = req.nextUrl;

  const isUserOnboarded = onboardCookie === "true";

  const isPublicAuthRoute =
    pathname === "/" ||
    PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  // --- LOGIC FOR UNAUTHENTICATED USERS ---
  if (!session) {
    // Allow access to landing page and public auth routes
    if (isPublicAuthRoute) {
      return NextResponse.next();
    }
    // For any other route, redirect to auth
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // --- LOGIC FOR AUTHENTICATED USERS ---
  if (session) {
    // If user is NOT onboarded and is NOT on the onboarding page, force them there.
    if (!isUserOnboarded && pathname !== ONBOARD_ROUTE) {
      return NextResponse.redirect(new URL(ONBOARD_ROUTE, req.url));
    }

    // If user IS onboarded...
    if (isUserOnboarded) {
      // ...and they try to access the onboarding page or a public auth route, redirect them home.
      if (pathname === ONBOARD_ROUTE || isPublicAuthRoute) {
        return NextResponse.redirect(new URL(HOME_PAGE, req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
