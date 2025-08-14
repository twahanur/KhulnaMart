import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * Usage: <div className={cn("p-4", isActive && "bg-blue-500", "p-2")} />
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}