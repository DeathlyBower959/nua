import type { z } from 'zod';

export function capitalize(data: string) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export function generateUrl<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  data: Partial<z.infer<typeof schema>>
) {
  // TODO: Don't use static url, try and use an env variable
  const url = new URL('https://nua.vercel.app/embeds/pomodoro/view');
  const defaultParams = schema.parse({});

  for (const key in data) {
    const value = data[key];
    const defaultParam = defaultParams[key];
    if (defaultParam !== value && value !== undefined) {
      console.log(defaultParams);
      url.searchParams.append(key, String(value));
    }
  }

  return url.toString();
}
