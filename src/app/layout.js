import "./globals.css";
import Navbaar from "@/components/navbar/Navbaar";
import SmoothScroll from "@/components/locomotive/SmoothScroll";

export const metadata = {
  title: "My Website",
  description: "Scroll Smoothly with Locomotive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbaar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
