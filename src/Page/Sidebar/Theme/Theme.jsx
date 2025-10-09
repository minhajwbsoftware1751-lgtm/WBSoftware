import React, { useEffect, useState } from "react";

// Theme.jsx
// A small React component that renders a set of color swatches.
// Clicking a swatch changes the document body's background color.
// The chosen color is persisted to localStorage so it remains after reload.

export default function Theme() {
  const COLOR_KEY = "theme:background";

  const colors = [
    { name: "White", value: "#ffffff" },
    { name: "Light Gray", value: "#f3f4f6" },
    { name: "Sky Blue", value: "#e0f2fe" },
    { name: "Mint", value: "#ecfccb" },
    { name: "Peach", value: "#fff1e6" },
    { name: "Lavender", value: "#f3e8ff" },
    { name: "Charcoal", value: "#111827" },
    { name: "Soft Blue", value: "#bfdbfe" }
  ];

  const [selected, setSelected] = useState(() => {
    try {
      return localStorage.getItem(COLOR_KEY) || "#ffffff";
    } catch (e) {
      return "#ffffff";
    }
  });

  // Apply selected color to document body and persist
  useEffect(() => {
    document.body.style.backgroundColor = selected;
    try {
      localStorage.setItem(COLOR_KEY, selected);
    } catch (e) {
      // ignore
    }

    // cleanup not needed because we always set background when color changes
  }, [selected]);

  const handleSelect = (color) => setSelected(color);

  const handleReset = () => {
    setSelected("#ffffff");
    try {
      localStorage.removeItem(COLOR_KEY);
    } catch (e) {}
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-lg font-semibold mb-3">Theme — Choose background color</h2>

      <div className="grid grid-cols-4 gap-3 mb-4">
        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => handleSelect(c.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleSelect(c.value);
            }}
            aria-pressed={selected === c.value}
            aria-label={`Set background to ${c.name}`}
            className={`h-12 w-full rounded-lg ring-2 focus:outline-none focus:ring-offset-2 transition-shadow`}
            style={{
              background: c.value,
              boxShadow: selected === c.value ? "0 0 0 4px rgba(0,0,0,0.08)" : "none",
              border: selected === c.value ? "2px solid rgba(0,0,0,0.12)" : "1px solid rgba(0,0,0,0.06)"
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleReset}
          className="px-3 py-2 rounded-md border shadow-sm hover:opacity-90"
        >
          Reset
        </button>

        <div className="text-sm text-gray-600">Current: <span className="font-medium">{selected}</span></div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Tip: This component updates <code>document.body</code> background. If you want to change a specific
        wrapper instead, tell me and I will update the component to accept a ref or a CSS selector.
      </p>
    </div>
  );
}
