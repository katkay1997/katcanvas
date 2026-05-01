import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";

type Props = {
  /** Position as % of the background image (so it scales). */
  top: string;
  left: string;
  width: string;
  height: string;
  label: string;
  tooltip?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const Hotspot = ({ top, left, width, height, label, tooltip, onClick, children }: Props) => {
  const node = (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="hotspot focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ top, left, width, height }}
    >
      {children}
    </button>
  );

  if (!tooltip) return node;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{node}</TooltipTrigger>
      <TooltipContent
        side="top"
        className="glass-panel border-primary/40 text-foreground font-body"
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

export default Hotspot;
