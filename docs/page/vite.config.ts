import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const isCi = process.env.GITHUB_ACTIONS === 'true';
  const pluginManifestPath = path.resolve(__dirname, '../../.claude-plugin/plugin.json');
  const pluginManifest = JSON.parse(fs.readFileSync(pluginManifestPath, 'utf-8')) as {version?: string};
  const pluginVersion = pluginManifest.version ?? '0.0.0';

  return {
    base: isCi ? '/fhir-format-skill/' : '/',
    plugins: [react(), tailwindcss()],
    define: {
      __PLUGIN_VERSION__: JSON.stringify(`v${pluginVersion}`),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled when DISABLE_HMR is true.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
