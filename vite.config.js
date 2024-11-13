// vite.config.js
import { defineConfig } from 'vite';

const libConfig = defineConfig({
  build: {
    outDir: 'dist', // Temporary output directory for the HTML build
    esbuild: false,
    minify: false,
    lib: {
      entry: 'main.js',
      name: 'uc',
      formats: ['umd'],
      fileName: (format, entryName) => `engage-link.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: [],
      output: {
        // entryFileNames: "[name][hash].js",
        globals: {
          // Define global variables for external dependencies
          // 'your-dependency': 'YourDependencyGlobalVar'
        },
      },
    },
  },
  // envPrefix: 'APP_',
});
export default libConfig;
