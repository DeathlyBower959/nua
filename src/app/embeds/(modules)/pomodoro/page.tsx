'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { AppHeader, AppWrapper } from '~/components/apps/global';
import { generateUrl } from '~/lib/utils';
import { Button } from '~/ui';

import { SettingsInputs } from './view/components/SettingsInputs';
import RenderPage from './view/page';
import { schemaParams } from './view/schema';

import type { ISchema } from './view/schema';
const defaultParams = schemaParams.parse({});

export default function Page() {
  const [data, setData] = useState<ISchema>({
    ...defaultParams,
    pomodoro: defaultParams.pomodoro / 60,
    short_break: defaultParams.short_break / 60,
    long_break: defaultParams.long_break / 60,
  });

  return (
    <AppWrapper>
      <AppHeader>Pomodoro</AppHeader>
      <div className='flex flex-col gap-2 px-4'>
        <SettingsInputs data={data} setData={setData} />
        <Button
          onClick={() => {
            navigator.clipboard
              .writeText(generateUrl(schemaParams, data))
              .catch(err => {
                console.error(err);
                toast.error('Failed to copy to clipboard!', {
                  duration: 5000,
                });
              });

            toast.message('Copied to clipboard!', {
              description:
                'Paste this url in your browser, or in another service to embed the website!',
              duration: 5000,
            });
          }}
        >
          Copy URL
        </Button>
        <br />
      </div>
      <div className='border-2 relative p-8'>
        <RenderPage searchParams={data} />
      </div>
    </AppWrapper>
  );
}
