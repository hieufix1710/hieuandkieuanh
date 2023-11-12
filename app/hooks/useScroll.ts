import { useEffect } from "react";

export default function useScroll({
  id,
  top,
  active,
}: {
  id: string;
  top?: boolean;
  active?: boolean;
}) {
  useEffect(() => {
    const target = document.getElementById(id);
    if (id && target && active) {
      target.scrollTo(0, top ? 0 : target.scrollHeight);
    }
  }, [id, top, active]);

  const scrollTop = () => {
    const target = document.getElementById(id);
    if (id && target && active) {
      target.scrollTo(0, 0);
    }
  };

  return { scrollTop };
}
