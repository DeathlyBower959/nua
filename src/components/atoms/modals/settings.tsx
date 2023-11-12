'use client';
import { Settings } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/ui/dialog';
import { Label } from '~/ui/label';

import ThemeSwitch from '../ThemeChanger';

export default function SettingsModal() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Settings size={28} />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Make any changes to your settings here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(new FormData(e.currentTarget));
            setOpen(false);
          }}
        >
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Theme</Label>
              <ThemeSwitch />
            </div>

            {/* <Separator />
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                  Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="col-span-3"
                  />
                  {formState.errors.name && (
                    <p className="text-sm col-span-2 col-start-3 text-right text-red-500">
                      {formState.errors.name.message}
                    </p>
                    )}
                </div> */}
          </div>
          <DialogFooter>
            <Button type='submit'>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
