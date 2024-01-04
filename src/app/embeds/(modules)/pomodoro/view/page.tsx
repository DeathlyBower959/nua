'use client';

import { LayoutGroup, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { EmbedWrapper } from '~/components/apps/global';
import { Button } from '~/components/ui';
import { useSound } from '~/hooks/use-sound';

import { Tab } from './components/Tab';
import { schemaParams } from './schema';

import type { ObjectValues } from '~/lib/types/utils';

import type { ISchema } from './schema';

const MODE = {
  Pomodoro: 'Pomodoro',
  ShortBreak: 'ShortBreak',
  LongBreak: 'LongBreak',
} as const;

export interface IState {
  secondsLeft: number;
  iter: number;

  mode: ObjectValues<typeof MODE>;
  started: boolean;
}

export default function Page({ searchParams }: { searchParams: ISchema }) {
  const validate = useMemo(
    () => schemaParams.safeParse(searchParams),
    [searchParams]
  );

  // Sounds
  const volume = useMemo(
    () => (validate.success ? validate.data.volume : 30) / 100,
    [validate]
  );
  const bell = useSound('/sounds/bell.mp3', { volume });
  const morning_birds = useSound('/sounds/morning_birds.mp3', { volume });
  const ringtone = useSound('/sounds/ringtone.mp3', { volume });
  const simple_notification = useSound('/sounds/simple_notification.mp3', {
    volume,
  });
  const wind_chimes = useSound('/sounds/wind_chimes.mp3', { volume });
  const playAlarm = useCallback(async () => {
    if (validate.success) {
      bell.stop();
      morning_birds.stop();
      ringtone.stop();
      simple_notification.stop();
      wind_chimes.stop();
      switch (validate.data.sound) {
        case 'off':
          break;
        case 'bell':
          await bell.play();
          break;
        case 'morning birds':
          await morning_birds.play();
          break;
        case 'ringtone':
          await ringtone.play(6);
          break;
        case 'simple notification':
          await simple_notification.play(3);
          break;
        case 'wind chimes':
          await wind_chimes.play();
          break;
      }
    }
  }, [
    validate,
    bell,
    morning_birds,
    ringtone,
    simple_notification,
    wind_chimes,
  ]);

  // Pomodoro State
  const [state, setState] = useState<IState>({
    secondsLeft: validate.success ? validate.data.pomodoro : 0,
    iter: 0,

    mode: MODE.Pomodoro,
    started: false,
  });

  useEffect(() => {
    if (state.started && validate.success) {
      // Main loop
      const timer = setInterval(() => {
        setState(prev => {
          switch (prev.mode) {
            case MODE.Pomodoro:
              // Pomodoro finished (ready for long break)
              if (prev.secondsLeft <= 0 && prev.iter === 3) {
                void playAlarm();
                return {
                  ...prev,
                  secondsLeft: validate.data.long_break,
                  iter: (prev.iter % 4) + 1,
                  mode: MODE.LongBreak,
                  started: false,
                };
              } else if (prev.secondsLeft <= 0) {
                // Pomodoro finished (ready for short break)
                void playAlarm();
                return {
                  ...prev,
                  secondsLeft: validate.data.short_break,
                  iter: (prev.iter % 4) + 1,
                  mode: MODE.ShortBreak,
                  started: false,
                };
              }

              // Normal countdown
              return { ...prev, secondsLeft: prev.secondsLeft - 1 };

            case MODE.ShortBreak:
              // Short Break finished (ready for pomodoro)
              if (prev.secondsLeft <= 0) {
                void playAlarm();
                return {
                  ...prev,
                  secondsLeft: validate.data.pomodoro,
                  mode: MODE.Pomodoro,
                  started: false,
                };
              }

              // Normal countdown
              return { ...prev, secondsLeft: prev.secondsLeft - 1 };

            case MODE.LongBreak:
              // Long Break finished (ready for pomodoro)
              if (prev.secondsLeft <= 0) {
                void playAlarm();
                return {
                  ...prev,
                  secondsLeft: validate.data.pomodoro,
                  mode: MODE.Pomodoro,
                  started: false,
                };
              }

              // Normal countdown
              return { ...prev, secondsLeft: prev.secondsLeft - 1 };
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    } else return;
  }, [state.started, validate, playAlarm]);

  useEffect(() => {
    if (validate.success) {
      // Set times on validate success
      setState(prev => ({
        ...prev,
        secondsLeft:
          prev.mode === 'Pomodoro'
            ? validate.data.pomodoro
            : prev.mode === 'ShortBreak'
              ? validate.data.short_break
              : validate.data.long_break,
      }));
    }
  }, [validate]);

  // Use provided invalid params
  if (!validate.success) {
    return (
      <div className='text-center'>
        <h1>Invalid Params</h1>
        <ul>
          {validate.error.issues.map(issue => (
            <li key={`embed-invalid-${issue.path.join('-')}`}>
              {issue.path.join('.') + ': '}
              {issue.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <EmbedWrapper
      style={{
        backgroundColor: `#${validate.data.background_color}`,
        backgroundImage:
          validate.data.background_image &&
          `url(${validate.data.background_image})`,
      }}
      className='flex items-center justify-center bg-no-repeat bg-cover bg-center'
    >
      <div>
        <div className='relative flex gap-[1em] text-center justify-center'>
          {Object.values(MODE).map(mode => (
            <div key={`tab-${mode}`}>
              <Tab
                selected={state.mode === mode}
                onClick={() =>
                  setState(prev => ({
                    ...prev,
                    mode,
                    started: false,
                    secondsLeft:
                      mode === 'Pomodoro'
                        ? validate.data.pomodoro
                        : mode === 'ShortBreak'
                          ? validate.data.short_break
                          : validate.data.long_break,
                  }))
                }
                tab={mode}
              />
              {mode === 'Pomodoro' && (
                <LayoutGroup>
                  <div className='flex gap-[0.25em] w-full justify-center mt-[0.25em]'>
                    {new Array(state.iter).fill(null).map((_, i) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={`pomodoro-iter-${i}`}
                        className='w-[0.5em] rounded-full aspect-square bg-accent'
                      />
                    ))}
                  </div>
                </LayoutGroup>
              )}
            </div>
          ))}
        </div>
        <h2 className='my-[0.5em] text-center text-[6em] leading-none'>
          {Math.floor(state.secondsLeft / 60)}:
          {(state.secondsLeft % 60).toString().padStart(2, '0')}
        </h2>
        <div className='flex gap-4'>
          <Button
            className='flex-1'
            size='text'
            onClick={() => {
              setState(prev => ({ ...prev, started: !prev.started }));
            }}
          >
            {state.started ? 'Stop' : 'Start'}
          </Button>
          {state.started && (
            <Button
              size='text'
              className='flex-1'
              onClick={() =>
                setState(prev => ({
                  ...prev,
                  started: false,
                  secondsLeft: validate.data.pomodoro,
                  mode: 'Pomodoro',
                }))
              }
            >
              Restart
            </Button>
          )}
        </div>
      </div>
    </EmbedWrapper>
  );
}
