import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "./globals.css";
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "First App",
  description: "First app on Nextjs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
