import { useEffect, useState } from 'react';

interface SoundOptions {
  volume?: number;
  speed?: number;
  loop?: boolean;
}

export const useSound = (soundFile: string, options?: SoundOptions) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Lazy load the audio file
    const audioElement = new Audio(soundFile);
    setAudio(audioElement);

    // Clean up function to unload audio when the component unmounts
    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, [soundFile]);

  useEffect(() => {
    if (audio && options) {
      if (options.volume !== undefined) {
        audio.volume = options.volume;
      }
      if (options.speed !== undefined) {
        audio.playbackRate = options.speed;
      }
      if (options.loop !== undefined) {
        audio.loop = options.loop;
      }
    }
  }, [audio, options]);

  const playSound = async (times = 1): Promise<void> => {
    if (audio) {
      audio.currentTime = 0; // Reset the audio to the beginning

      const playOnce = () =>
        new Promise<void>(res => {
          audio.addEventListener('ended', () => res(), { once: true });
          audio.play().catch(err => console.error(err));
        });

      for (let i = 0; i < times; i++) {
        console.log(i);
        await playOnce();
      }
    }
  };

  const stopSound = (): void => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }
  };

  const setVolume = (volume: number): void => {
    if (audio) {
      audio.volume = volume;
    }
  };

  const setSpeed = (speed: number): void => {
    if (audio) {
      audio.playbackRate = speed;
    }
  };

  return {
    play: playSound,
    stop: stopSound,
    volume: setVolume,
    speed: setSpeed,
  };
};
