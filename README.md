# R.JC Film Starter

First starter version for the R.JC Film streaming app.

Included:
- Home
- Shorts
- Center + Create button
- Subscriptions
- You/Profile
- Supabase client setup
- Cloudflare Stream configuration placeholders
- Vite build setup
- Ready for Vercel or Cloudflare Pages deployment

## Start locally

1. Install Node.js.
2. Open this folder in VS Code.
3. Run:
   npm install
4. Copy `.env.example` to `.env`.
5. Add your Supabase and Cloudflare values.
6. Run:
   npm run dev

## Important
Do not put Cloudflare API tokens or secret keys in frontend `.env` variables.
Only public-safe values belong in VITE_ variables.
Server-side upload/signing should be added later using a backend function.
