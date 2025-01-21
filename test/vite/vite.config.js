import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
    resolve: {
        alias: {
            'fingerprinty': path.resolve(__dirname, '../../src/mod.ts')
        }
    }
});