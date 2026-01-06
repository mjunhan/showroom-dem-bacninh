import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
        <html lang="vi" suppressHydrationWarning>
            <body className={cn(inter.variable, playfair.variable, "antialiased selection:bg-primary/20")}>
                <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
                    {children}
                </div>
            </body>
        </html>
    );
}
