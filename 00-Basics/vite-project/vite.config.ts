import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    port: 3102, // 원하는 포트
    strictPort: true, // 이미 사용 중이면 자동 변경하지 않음
  },
});
