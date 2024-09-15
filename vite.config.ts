import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const isDev = env.VITE_ENV === "dev";

  return {
    base: isDev ? "/" : "/js-portfolio/",
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
