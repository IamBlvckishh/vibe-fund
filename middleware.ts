import { auth } from "@/auth";

export default auth((req) => {
  // If the user is NOT logged in and tries to go to /submit
  if (!req.auth && req.nextUrl.pathname.startsWith("/submit")) {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// This tells the guard which paths to watch
export const config = {
  matcher: ["/submit/:path*"],
};
