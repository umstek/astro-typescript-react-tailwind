import type { AnchorHTMLAttributes } from "react";

interface HeaderProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function HeaderLink(props: HeaderProps) {
  const { href, className, children } = props;
  return (
    <a
      href={href}
      className={[className, "px-4 hover:text-rose-600 opacity-100"].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}

export default HeaderLink;
