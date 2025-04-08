import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    console.log(`🔥 Building for MODE: ${mode}`);

    return {
        plugins: [react()],
        build: {
            outDir: `dist-${mode}`, //dist mode - folder
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name]-[hash][extname]',
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                },
            },
        },
        define: {
            BUILD_MODE: JSON.stringify(mode),
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "src/styles/variables.scss";
                        @import "src/styles/mixins.scss";
                    `
                }
            }
        }
    };
});