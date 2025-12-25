import React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@workspace/ui/components/command';
import { cn } from '@workspace/ui/lib/utils';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@workspace/ui/components/field';
import { Button } from '@workspace/ui/components/button';
import { Check, ChevronsUpDown } from 'lucide-react';

type CountrySelectorProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  allowedCountries: readonly string[];
  label?: string;
};

export const CountrySelector = <T extends FieldValues>({
  name,
  control,
  allowedCountries,
  label = 'Country',
}: CountrySelectorProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selected: string[] = field.value || [];

        return (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>{label}</FieldLabel>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn(
                    'w-full justify-between',
                    fieldState.invalid && 'border-destructive',
                  )}
                >
                  {selected.length
                    ? allowedCountries.filter((c) => selected.includes(c)).join(', ')
                    : 'Select countries'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                </Button>
              </PopoverTrigger>

              <PopoverContent className='w-full p-0'>
                <Command>
                  <CommandInput placeholder='Search country...' />
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      {allowedCountries.map((c) => {
                        const isSelected = selected.includes(c);

                        return (
                          <CommandItem
                            key={c}
                            onSelect={() => {
                              if (isSelected) {
                                field.onChange(selected.filter((v) => v !== c));
                              } else {
                                field.onChange([...selected, c]);
                              }
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                isSelected ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {c}
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
};
