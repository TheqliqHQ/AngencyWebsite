import Link from "next/link";
import clsx from "clsx";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  withArrow?: boolean; // show arrow (↗ →) on the right
  size?: "md" | "lg";
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

/** Right-pointing arrow (→). We’ll rotate it -45° by default to look like ↗ */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={clsx("h-4 w-4", className)}
    >
      {/* shaft */}
      <path
        d="M3 10h10"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* head */}
      <path
        d="M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-[500] text-[14px] leading-[22px] transition-all duration-150 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2";

const sizes = {
  md: "px-5 py-3",
  lg: "px-6 py-3.5",
};

const variants = {
  solid:
    "bg-[var(--brand)] text-white shadow-[0_8px_28px_rgba(0,0,0,.12)] hover:shadow-[0_10px_32px_rgba(0,0,0,.16)]",
  outline:
    "bg-white text-[rgb(16,18,19)] border border-black/10 shadow-[0_6px_20px_rgba(0,0,0,.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,.12)]",
};

function Inner({
  children,
  variant = "solid",
  size = "md",
  withArrow = true,
  className,
}: CommonProps) {
  return (
    <span
      className={clsx(
        base,
        sizes[size],
        variants[variant],
        "group", // enables group-hover
        className
      )}
    >
      <span>{children}</span>

      {withArrow && (
        <span
          className={clsx(
            "inline-flex items-center justify-center rounded-full",
            // Start diagonal (↗): rotate -45deg; on hover rotate to → and slide 2px
            "transform transition-transform duration-200 will-change-transform",
            "-rotate-45 translate-x-0 group-hover:rotate-0 group-hover:translate-x-[2px]"
          )}
          aria-hidden="true"
        >
          <ArrowIcon />
        </span>
      )}
    </span>
  );
}

// Renders <a> when href is provided, else <button>
export default function Button(props: LinkProps | ButtonProps) {
  const { className, variant, size, withArrow, children, ...rest } = props as any;

  const content = (
    <Inner
      className={className}
      variant={variant}
      size={size}
      withArrow={withArrow}
    >
      {children}
    </Inner>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <Link href={href} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...(rest as ButtonProps)}>
      {content}
    </button>
  );
}
