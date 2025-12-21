import { NextRequest } from "next/server";
import { handleRoot } from "./proxyUtils/handleRoot";

export const proxy = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  if (pathname === "/") return handleRoot(req);
};
