import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getSiteSettings } from "@/lib/sanity";

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const siteSettings = await getSiteSettings();

    return (
        <html lang="vi" suppressHydrationWarning>
            <body className={cn(inter.variable, playfair.variable, "antialiased selection:bg-primary/20")}>
                <Navbar
                    siteName={siteSettings?.siteName}
                    hotline={siteSettings?.hotline}
                />
                <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
                    {children}
                </div>
                <Footer
                    siteName={siteSettings?.siteName}
                    hotline={siteSettings?.hotline}
                    address={siteSettings?.address}
                    zaloUrl={siteSettings?.zaloUrl}
                />
            </body>
        </html>
    );
}
