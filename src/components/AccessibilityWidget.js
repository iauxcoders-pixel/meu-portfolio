"use client";

import { useEffect, useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const fontSizes = ['font-normal', 'font-large', 'font-xlarge'];
  const [fontSize, setFontSize] = useState('font-normal');
  const [modes, setModes] = useState({ highContrast: false, grayscale: false, underlineLinks: false });

  const MODE_CONFIG = {
    highContrast: { key: "accessibility_high_contrast", className: "high-contrast" },
    grayscale: { key: "accessibility_grayscale", className: "grayscale" },
    underlineLinks: { key: "accessibility_underline_links", className: "underline-links" },
  };

  useEffect(() => {
    const initial = { highContrast: false, grayscale: false, underlineLinks: false };
    Object.entries(MODE_CONFIG).forEach(([modeName, { key, className }]) => {
      try {
        const stored = localStorage.getItem(key);
        const enabled = stored === "true";
        initial[modeName] = enabled;
        if (enabled) document.body.classList.add(className);
        else document.body.classList.remove(className);
      } catch (e) {
        // ignore localStorage errors
      }
    });
    setModes(initial);

    // Load font size preference and apply class on body
    try {
      const storedSize = localStorage.getItem('accessibility_font_size');
      const newSize = fontSizes.includes(storedSize) ? storedSize : 'font-normal';
      setFontSize(newSize);
      fontSizes.forEach((cls) => document.body.classList.remove(cls));
      document.body.classList.add(newSize);
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  function toggleMode(modeName) {
    setModes((prev) => {
      const nextVal = !prev[modeName];
      const { key, className } = MODE_CONFIG[modeName];
      try {
        localStorage.setItem(key, String(nextVal));
      } catch (e) {
        // ignore localStorage errors
      }
      if (nextVal) document.body.classList.add(className);
      else document.body.classList.remove(className);
      return { ...prev, [modeName]: nextVal };
    });
  }

  function handleCycleFontSize() {
    setFontSize((prev) => {
      const currentIndex = fontSizes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % fontSizes.length;
      const newSizeClass = fontSizes[nextIndex];
      try {
        localStorage.setItem('accessibility_font_size', newSizeClass);
      } catch (e) {
        // ignore localStorage errors
      }
      fontSizes.forEach((cls) => document.body.classList.remove(cls));
      document.body.classList.add(newSizeClass);
      return newSizeClass;
    });
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-black text-white p-4 rounded-full shadow-lg"
        aria-label="Abrir menu de acessibilidade"
      >
        <FaUniversalAccess size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 bg-white text-black p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-semibold">Ajustes de Acessibilidade</h3>
          <div className="mt-3 space-y-2">
            <button
              type="button"
              onClick={() => toggleMode("highContrast")}
              className="w-full text-left py-2 px-3 rounded hover:bg-gray-100"
              aria-pressed={modes.highContrast}
            >
              Alto Contraste
            </button>
            <button
              type="button"
              onClick={() => toggleMode("grayscale")}
              className="w-full text-left py-2 px-3 rounded hover:bg-gray-100"
              aria-pressed={modes.grayscale}
            >
              Modo Monocromático
            </button>
            <button
              type="button"
              onClick={() => toggleMode("underlineLinks")}
              className="w-full text-left py-2 px-3 rounded hover:bg-gray-100"
              aria-pressed={modes.underlineLinks}
            >
              Sublinhar Links
            </button>
            <button
              type="button"
              onClick={handleCycleFontSize}
              className="w-full text-left py-2 px-3 rounded hover:bg-gray-100"
            >
              Aumentar Fonte
            </button>
          </div>
        </div>
      )}
    </div>
  );
}