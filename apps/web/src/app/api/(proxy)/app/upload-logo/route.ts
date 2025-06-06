import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie");
  const formData = await req.formData();

  const apiRes = await fetch(`${process.env.API_BASE_URL}/app/logo`, {
    method: "POST",
    headers: {
      cookie: cookieHeader || "",
    },
    body: formData,
  });

  const resBody = await apiRes.text();
  const res = new NextResponse(resBody, {
    status: apiRes.status,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const setCookie = apiRes.headers.getSetCookie?.() || [];
  if (setCookie.length > 0) {
    res.headers.set("Set-Cookie", setCookie.join(","));
  }

  return res;
}
