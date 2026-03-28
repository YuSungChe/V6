export default async (req, context) => {
  const ip = context.ip || req.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const timestamp = new Date().toISOString();

  console.log(`[訪客] IP: ${ip} | 時間: ${timestamp} | UA: ${userAgent}`);

  return new Response(JSON.stringify({
    status: "recorded",
    ip: ip,
    time: timestamp
  }), { 
    headers: { "Content-Type": "application/json" } 
  });
}
