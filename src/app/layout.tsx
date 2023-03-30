import "@/styles/tailwind.css";
import Head from "next/head";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });

export const metadata = {
	title: "Principles of Macroeconomics",
	description: "A nice textbook",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={roboto.className}>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
					integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>{children}</body>
		</html>
	);
}
