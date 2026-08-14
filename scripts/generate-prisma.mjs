import { spawnSync } from "node:child_process";

const result = spawnSync("prisma", ["generate"], {
  env: {
    ...process.env,
    // Client generation reads the schema only; a real database URL is still required at runtime.
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://build:build@localhost:5432/giangcuon_gaming?schema=public",
  },
  shell: process.platform === "win32",
  stdio: "inherit",
});

process.exit(result.status ?? 1);
