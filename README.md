# Konomi

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a Turso database (install the [Turso CLI](https://docs.turso.tech/cli/installation) first):
   ```
   turso db create konomi
   turso db show konomi --url
   turso db tokens create konomi
   ```

3. Copy `.env.example` to `.env.local` and fill in the URL and token from step 2:
   ```
   cp .env.example .env.local
   ```

4. Push the schema to your database:
   ```
   npm run db:push
   ```

5. Run the dev server:
   ```
   npm run dev
   ```
   Open http://localhost:3000

## What's here

- `src/app` — Next.js App Router pages and global styles.
- `src/components/Homepage.tsx` — the homepage: four flip-card category tiles that collapse into a sidebar on first click.
- `src/db` — Drizzle schema and the Turso client. `schema.ts` currently has placeholder `users` and `savedLists` tables — expand these as each mode gets built.
- `drizzle.config.ts` — lets `drizzle-kit` talk to your Turso database.

## Not built yet

- OAuth logins (for "Personal" and "Mixed" modes) — next step once the "Artists" mode flow exists for one category.
- The actual recommendation logic for each mode.
- The settings view.