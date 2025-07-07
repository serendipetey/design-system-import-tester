/// <reference types="vitest/globals" />
// src/test-setup.ts

// Global test configuration for JSDOM environment
if (typeof global !== "undefined") {
  global.ResizeObserver =
    global.ResizeObserver ||
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
}

// Mock window.matchMedia if in browser environment
if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
}
