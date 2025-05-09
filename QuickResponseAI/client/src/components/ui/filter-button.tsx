import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const filterButtonVariants = cva(
  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-150",
  {
    variants: {
      active: {
        true: "bg-primary text-white dark:bg-accent shadow-sm border border-primary/20 dark:border-accent/20",
        false: "bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface FilterButtonProps extends VariantProps<typeof filterButtonVariants> {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export default function FilterButton({
  label,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button 
      className={cn(filterButtonVariants({ active }))} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}
