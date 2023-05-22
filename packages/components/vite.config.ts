import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [react(),
    dts({
        insertTypesEntry: true,
    })],
    build: {
        outDir: 'lib',
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'components',
            formats: ['umd'],
            fileName: () => `bundle.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'lodash', /@ui5/],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})