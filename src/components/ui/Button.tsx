"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-sans font-semibold rounded-full transition-all duration-200 cursor-pointer select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-ivory hover:bg-terracotta-hover hover:shadow-lg hover:shadow-terracotta/30 focus-visible:ring-terracotta",
  secondary:
    "bg-sand text-charcoal hover:bg-sand-deep hover:shadow-md hover:shadow-near-black/10 focus-visible:ring-near-black/30",
  ghost:
    "bg-transparent text-ivory border border-ivory/25 hover:bg-ivory/[0.06] hover:border-ivory/50 focus-visible:ring-ivory/60",
  inverse:
    "bg-ivory text-terracotta hover:bg-ivory/95 hover:shadow-xl hover:shadow-black/20 focus-visible:ring-ivory",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[15px] px-6 py-3",
  lg: "text-[15px] px-8 py-4",
};

function Arrow({ isRtl }: { isRtl: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        "transition-transform",
        isRtl
          ? "rotate-180 group-hover:-translate-x-0.5"
          : "group-hover:translate-x-0.5",
      )}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

type SharedProps = {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  leadingIcon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type AnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

export type ButtonOrAnchorProps = AnchorProps | ButtonProps;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonOrAnchorProps
>(function Button(props, ref) {
  const { dir } = useI18n();
  const isRtl = dir === "rtl";

  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    leadingIcon,
    children,
    className,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {leadingIcon}
      {children}
      {showArrow && <Arrow isRtl={isRtl} />}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
