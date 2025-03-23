import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "SaloneSync",
  description: "book your beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`grid place-content-center`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
