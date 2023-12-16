"use client";

import Image from "next/image";
import ActionToltip from "../ui/action-tooltip";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  return (
    <ActionToltip side="right" align="center" label="name">
      <button onClick={() => {}} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w- "
          )}
        ></div>
      </button>
    </ActionToltip>
  );
};
