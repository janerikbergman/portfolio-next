import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen">
                    <Header />
                    <div className="bg-slate-100 h-full">
                        <div className="m-auto max-w-screen-lg bg-white h-full px-10 py-5 pt-20">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}