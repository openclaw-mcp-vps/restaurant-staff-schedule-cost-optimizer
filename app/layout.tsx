import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftSmart – Restaurant Staff Schedule & Cost Optimizer",
  description: "Optimize restaurant staffing to minimize labor costs by 12-18% using AI-powered scheduling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3d8b1152-40d1-489f-a8b9-bd72b10b3bb1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
