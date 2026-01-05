import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin", "vietnamese"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    // ... existing metadata
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${inter.variable} ${playfair.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
