import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        istanbul({
            cypress: true,
            requireEnv: false,
        })
    ],
    server: {
        host: true,
        port: 3000,
    },
})