import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Dish Dash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
