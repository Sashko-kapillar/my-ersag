import React from "react";
import { cn } from "@/lib/cn";

export type SmartButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  iconPosition?: "left" | "right";
  iconFill?: string;
  iconStroke?: string;
  iconClassName?: string;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "danger";
};

export default function SmartButton({
  label,
  type = "button",
  icon,
  iconPosition = "left",
  iconFill,
  iconStroke,
  iconClassName = "",
  className = "",
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  href,
}: SmartButtonProps) {
  const hasIcon = Boolean(icon);
  const blocked = disabled || loading;

  const variantClasses = {
    primary:
      "lg:bg-transparent border-trend-700 lg:border-trend-700 text-tangerine lg:text-trend-700 border-1 hover:text-chilean-fire hover:lg:border-chilean-fire focus:outline-tangerine focus:outline-2 focus:text-tangerine",
    secondary:
      "text-trend-400 bg-tangerine hover:text-chilean-fire focus:bg-chilean-fire focus:outline-chilean-fire focus:outline-2 font-bold",
    danger:
      "bg-red-100 text-red-700 border-red-300 hover:bg-red-500 hover:text-white",
  } as const;

  const iconElement =
    icon &&
    (
      <svg
        className={iconClassName}
        aria-hidden="true"
        fill={iconFill}
        stroke={iconStroke}
      >
        <use href={icon} />
      </svg>
    );

  const content = loading ? (
    "Loading..."
  ) : (
    <>
      {hasIcon && iconPosition === "left" && iconElement}
      <span className="shrink-0">{label}</span>
      {hasIcon && iconPosition === "right" && iconElement}
    </>
  );

  const finalClassName = cn(
    "inline-flex w-fit items-center justify-center rounded-full px-6 py-4 4xl:py-5.5 font-semibold text-base/[100%] 4xl:text-[20px] tracking-[-0.02em] transition-colors duration-300",
    variantClasses[variant],
    {
      "gap-2": hasIcon,
      "flex-row-reverse": hasIcon && iconPosition === "right",
      "opacity-50 cursor-not-allowed": blocked,
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={finalClassName} onClick={onClick} aria-disabled={blocked}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={finalClassName} onClick={onClick} disabled={blocked}>
      {content}
    </button>
  );
}
