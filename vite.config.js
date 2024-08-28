import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": process.env.API_BASE_URL,
    },
    host: "0.0.0.0",
  },
  plugins: [react()],
});
