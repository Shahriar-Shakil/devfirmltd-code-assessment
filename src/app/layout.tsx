import MainLayout from "@/components/MainLayout";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params, searchParams }: Props) {
  return {
    title: "Dashboard",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextTopLoader color="#2299DD" height={3} showSpinner={false} />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
