const BLOCKED_IPS = new Set([
  // 在這裡加入你要封鎖的 IP，一行一個
  // 例如 "123.45.67.89",
]);

export default async (req, context) => {
  const ip = context.ip || req.headers.get('x-forwarded-for') || 'unknown';

  if (BLOCKED_IPS.has(ip)) {
    return new Response("Access Denied", { status: 403 });
  }

  return new Response(JSON.stringify({ status: "ok", ip: ip }), {
    headers: { "Content-Type": "application/json" }
  });
}
