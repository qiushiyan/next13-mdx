import addMdx from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
};

const widthMDX = addMdx(nextConfig, {
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

export default widthMDX(nextConfig);
