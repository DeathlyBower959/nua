import { usePathname } from 'next/navigation';
import { cn } from '~/lib/tailwind';

// TODO: Try an escape the parent layout
export const EmbedWrapper = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const pathname = usePathname();

  const isViewMode = /embeds\/.+\/view/.test(pathname);
  return (
    <div
      className={cn(isViewMode && 'absolute inset-0 bg-background', className)}
      style={style}
    >
      {children}
    </div>
  );
};
