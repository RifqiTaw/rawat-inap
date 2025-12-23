import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modul Rawat Inap",
  description: "Pasien Masuk & Daftar Pasien Aktif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
