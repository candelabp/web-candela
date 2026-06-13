import { useCallback } from "react";

export function useSmoothScroll(onBeforeScroll?: () => void) {
  return useCallback(
    (id: string) => {
      onBeforeScroll?.();

      const element = document.getElementById(id);
      if (!element) return;

      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    },
    [onBeforeScroll],
  );
}
