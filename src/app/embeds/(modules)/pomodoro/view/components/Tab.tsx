import { Button } from '~/components/ui';
import { cn } from '~/lib/tailwind';

import type { IState } from '../page';
export function Tab({
  tab,
  selected,
  onClick,
}: {
  tab: IState['mode'];
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <Button
        size='text'
        onClick={onClick}
        className={cn(
          'cursor-pointer hover:bg-accent bg-secondary relative py-[0.5em] px-[1em] rounded-full transition-colors duration-500 select-none text-foreground',
          selected && 'bg-accent'
        )}
      >
        {tab}
      </Button>
    </>
  );
}
