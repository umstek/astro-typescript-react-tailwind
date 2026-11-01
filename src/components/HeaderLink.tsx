import type { ComponentPropsWithRef } from "react";

function HeaderLink({ className, ...props }: ComponentPropsWithRef<"a">) {
  return (
    <a
      {...props}
      className={[className, "px-4 hover:text-rose-600 opacity-100"].filter(Boolean).join(" ")}
    />
  );
}

export default HeaderLink;
