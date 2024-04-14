import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jgkaplan.github.io',
	integrations: [mdx(), sitemap()],
	prefetch: {
		prefetchAll: true
	},
	// https://github.com/delucis/astro-auto-import/blob/main/packages/astro-auto-import/src/index.ts
	// markdown: {
	// 	remarkPlugins: [
	// 		function rehypeInjectMdxImports() {
    //             return function injectMdxImports(tree, vfile) {
    //               if (!vfile.basename?.endsWith('.md')) {
    //                 tree.children.unshift(importsNode);
    //               }
    //             };
    //           },
	// 	]
	// }
});
