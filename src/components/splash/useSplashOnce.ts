
import { useCallback, useEffect, useState } from "react";

const KEY = "notary_splash_seen";

export function useSplashOnce(defaultMs = 2200) {
  const seen = typeof window !== "undefined" && sessionStorage.getItem(KEY) === "1";
  const [show, setShow] = useState(!seen);

  useEffect(() => {
    if (!show) return;

    const t = setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      setShow(false);
    }, defaultMs + 600);
    return () => clearTimeout(t);
  }, [show, defaultMs]);

  const finish = useCallback(() => {
    sessionStorage.setItem(KEY, "1");
    setShow(false);
  }, []);

  return { show, finish };
}