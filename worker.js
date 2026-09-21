export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Backend API routes (if any)
    if (url.pathname === '/api/health') {
      return new Response(
        JSON.stringify({ status: 'ok', service: 'MediCare Pharmacy Cloudflare Worker' }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Serve static assets from public/ folder (with SPA fallback)
    return env.ASSETS.fetch(request);
  }
};
