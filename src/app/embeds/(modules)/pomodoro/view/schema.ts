import { z } from 'zod';

export const schemaParams = z
  .object({
    background_color: z
      .string()
      .regex(/^[0-9A-f]{6}/, 'Invalid hex color (remove hashtag)')
      .optional(),
    background_image: z.string().url().optional(),

    pomodoro: z.coerce
      .number()
      .min(1)
      .max(90)
      .optional()
      .transform(x => (x ? x : 25) * 60),
    short_break: z.coerce
      .number()
      .min(1)
      .max(30)
      .optional()
      .transform(x => (x ? x : 5) * 60),
    long_break: z.coerce
      .number()
      .min(1)
      .max(90)
      .optional()
      .transform(x => (x ? x : 15) * 60),

    sound: z
      .enum([
        'off',
        'bell',
        'morning birds',
        'ringtone',
        'simple notification',
        'wind chimes',
      ])
      .optional()
      .default('off'),
    volume: z.coerce.number().min(0).max(100).optional().default(30),
  })
  .strip();

export type ISchema = z.infer<typeof schemaParams>;
