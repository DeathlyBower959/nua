import { Input, Label, Select, Slider } from '~/components/ui';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import { schemaParams } from '../schema';

import type { ISchema } from '../schema';

export function SettingsInputs({
  data,
  setData,
}: {
  data: ISchema;
  setData: React.Dispatch<React.SetStateAction<ISchema>>;
}) {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <Label>Pomodoro</Label>
        <Input
          className='flex-1'
          value={data.pomodoro}
          type='number'
          min={1}
          max={90}
          onChange={e =>
            setData(prev => ({
              ...prev,
              pomodoro: e.target.valueAsNumber,
            }))
          }
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Short Break</Label>
        <Input
          className='flex-1'
          value={data.short_break}
          type='number'
          min={1}
          max={30}
          onChange={e =>
            setData(prev => ({
              ...prev,
              short_break: e.target.valueAsNumber,
            }))
          }
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Long Break</Label>
        <Input
          className='flex-1'
          value={data.long_break}
          type='number'
          min={1}
          max={90}
          onChange={e =>
            setData(prev => ({
              ...prev,
              long_break: e.target.valueAsNumber,
            }))
          }
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Background Color (hex)</Label>
        <Input
          className='flex-1'
          value={data.background_color}
          type='text'
          maxLength={6}
          onChange={e =>
            setData(prev => ({
              ...prev,
              background_color: e.target.value.trim() || undefined,
            }))
          }
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Background Image</Label>
        <Input
          className='flex-1'
          value={data.background_image}
          type='text'
          onChange={e =>
            setData(prev => ({
              ...prev,
              background_image: e.target.value.trim() || undefined,
            }))
          }
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Sound</Label>
        <Select
          value={data.sound}
          defaultValue='off'
          onValueChange={e =>
            setData(prev => ({ ...prev, sound: e as typeof prev.sound }))
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Play upon timer end' />
          </SelectTrigger>
          <SelectContent>
            {Object.values(
              schemaParams.shape.sound._def.innerType.unwrap().Values
            ).map(opt => (
              <SelectItem key={`pomodoro-select-${opt}`} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='flex gap-2 items-center'>
        <Label>Volume</Label>
        <Slider
          className='flex-1'
          value={[data.volume]}
          defaultValue={[30]}
          min={0}
          max={100}
          onValueChange={e =>
            setData(prev => ({
              ...prev,
              volume: e[0] ?? 30,
            }))
          }
        />
      </div>
    </>
  );
}
