"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className={"focus-visible:right-0 focus-visible:ring-offset-0"}
          >
            {theme === "system" ? (
              <SunMoon />
            ) : theme === "dark" ? (
              <Moon />
            ) : (
              <Sun />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={theme === "system"}
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === "light"}
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ModeToggle;
