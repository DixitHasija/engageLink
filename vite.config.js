import { defineConfig } from "vite";

export default defineConfig(() => {
  const configs = {
    build: {
      lib: {
        entry: {
          main: "main.js",
          serviceWorker: "service-worker/firebase-messaging-sw.js",
        },
        name: "engage-link.js",
        fileName: (format, entryName) => {
          return entryName === "main"
            ? `engage-link.js`
            : entryName === "serviceWorker"
              ? "firebase-messaging-sw.js"
              : "convert.js";
        },
        //   formats: ['umd']
      },
      outDir: "dist",
      esbuild: false,
      minify: false,
    },
  };

  // Check if mode matches one of the configs

  return configs;
});
