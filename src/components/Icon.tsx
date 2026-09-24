import { ReactNode } from "react";
import { IconName } from "@/data/site";

const iconPaths: Record<IconName, ReactNode> = {
  ai: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <rect x="7" y="7" width="10" height="10" rx="3" />
      <path d="M10 13c.6-2.3 3.4-2.3 4 0M10 11h.01M14 11h.01" />
    </>
  ),
  automation: (
    <>
      <path d="M4 7h10M10 3l4 4-4 4M20 17H10M14 13l-4 4 4 4" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 6h4M11 18h2" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 12a3 3 0 0 1-1 6Z" />
      <path d="M12 11v8M9 14l3-3 3 3" />
    </>
  ),
  design: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7Z" />
      <path d="m4 7 8 4 8-4M12 11v10" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-6" />
      <path d="M15 7h4v4" />
    </>
  ),
};

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}
