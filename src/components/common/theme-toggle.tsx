"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // resolvedTheme is used here because the toggle logic
  // needs to know the current theme to switch to the opposite one.
  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }
  if (!mounted)
    return (
      <Button
        variant={"ghost"}
        size={"icon"}
        disabled
        className={"opacity-0"}
      />
    );

  return (
    <Button
      onClick={toggle}
      variant={"ghost"}
      size={"icon"}
      aria-label="Toggle Theme"
      className="relative"
    >
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 duration-300" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 duration-300" />
    </Button>
  );
}
