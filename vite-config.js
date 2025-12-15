import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration for GitHub Pages Deployment
  base: '/Velozza/', 
  
  // The 'build' configuration is where Vite prepares the final assets.
  build: {
    // 1. Specifies the output directory (defaults to 'dist', but explicit is clearer)
    outDir: 'dist', 
    
    // 2. Clears the previous build directory before building
    emptyOutDir: true 
  }
});