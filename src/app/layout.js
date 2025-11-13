import "./globals.css";
import LoadAnimation from "../components/loadingAnimation/LoadAnimation"; 
// import Navbaar from "@/components/navbar/Navbaar";
import SmoothScroll from "@/components/locomotive/SmoothScroll";
import CursorEffect1 from "@/components/cursor/CursorEffect1";

export const metadata = {
  title: "Amir Alam",
  description: "Scroll Smoothly with me",
  icons: {
    icon: "/icon.ico", // path inside public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <LoadAnimation/>
          <CursorEffect1/>
          {/* <Navbaar /> */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
