"use client";
import React, { useCallback } from "react";
import FlyingPosters from "../FlyingPosters"; // adjust path if needed

export default function ResumeCard() {
  // Use public/ paths (leading slash)
  const items = [
    "/Resume/Amir_Alam.jpg",
    "/Resume/Amir_Alam.jpg",
    "/Resume/Amir_Alam.jpg",
    "/Resume/Amir_Alam.jpg",
  ];

  // Force-download helper (fetch -> blob -> click)
  const forceDownload = useCallback(async (src) => {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error("Network error");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = src.split("/").pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
      // fallback: open in new tab
      window.open(src, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    // Give container a fixed/known height so overlay slices line up with posters.
    <div className="relative w-full h-[700px] md:h-full overflow-hidden">
      {/* WebGL poster canvas behind */}
      <div className="absolute inset-0 z-0">
        <FlyingPosters items={items} className="absolute inset-0" />
      </div>

      {/* Invisible clickable slices overlay on top of the canvas */}
      <div className="absolute inset-0 z-40 pointer-events-auto">
        {items.map((src, i) => (
          <button
            key={i}
            // invisible full-width slice; height distributed equally
            className="w-full block bg-transparent"
            style={{
              display: "block",
              width: "20%",
              height: "30%",
              border: "none",
              padding: 0,
              margin: 0,
              background: "transparent",
            }}
            aria-label={`Download image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
