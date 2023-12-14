"use client"

import { Plus } from "lucide-react"
import ActionToltip from "../ui/action-tooltip"

export const NavigationAction = () => { 
    return (
      <div>
            <ActionToltip
                side="right"
                align="center"
                label="Add a server"
            >
          <button className="group flex items-center">
            <div
              className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px]
                 transition-all overflow-hidden items-center justify-center bg-background
                 dark:bg-neutral-700 group-hover:bg-emerald-500
                "
            >
              <Plus className="group-hover:text-white transition text-emerald-500" />
            </div>
          </button>
        </ActionToltip>
      </div>
    );
}