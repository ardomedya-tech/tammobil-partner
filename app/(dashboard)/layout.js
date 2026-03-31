import { Inter } from "next/font/google";
import "@/app/(user)/globals.css";
import Layout from "./dashboard/components/Layout";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import LoginClient from "./dashboard/components/LoginClient";
import AdminOnay from "./dashboard/components/AdminOnay";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tammobil Partner",
  description: "Tammobil Partner",
  robots: {
    index: false,
    nocache: true,
    follow: false,
  },
  other: {
    "facebook-domain-verification": "123123",
  },
};
export default async function SubLayout({ children }) {
  const user = await getCurrentUser();

  if (user === null) {
    redirect("/giris-yap");
  } else if (user?.firstTimeLogin === true && user?.adminOnay === false) {
    return (
      <html lang="tr">
        <body className={inter.className}>
          <LoginClient user={user} />
        </body>
      </html>
    );
  } else if (user?.firstTimeLogin === false && user?.adminOnay === false) {
    return (
      <html lang="tr">
        <body className={inter.className}>
          <AdminOnay user={user} />
        </body>
      </html>
    );
  } else {
    return (
      <html lang="tr">
        <body className={inter.className}>
          <Layout user={user}>{children}</Layout>
        </body>
      </html>
    );
  }
}
