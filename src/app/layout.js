import "./globals.css";
import LoadAnimation from "@/components/loadingAnimation/loadAnimation"; 
// import Navbaar from "@/components/navbar/Navbaar";
import SmoothScroll from "@/components/locomotive/SmoothScroll";
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
          {/* <Navbaar /> */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
