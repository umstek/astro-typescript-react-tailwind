const Tag = ({
  children,
  href,
  count,
  anchorClassName,
  ...rest
}: {
  children: string;
  href?: string;
  count?: number;
  anchorClassName?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...rest}>
      🏷️
      <a className={['cursor-pointer', anchorClassName].filter(Boolean).join(' ')} href={href}>
        <span>{children}</span>
      </a>
      {count && <span className="mx-1">({count})</span>}
    </div>
  );
};

export default Tag;
