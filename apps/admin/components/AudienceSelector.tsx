import { AUDIENCE_ORDER } from '@workspace/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import React from 'react';

const AudienceSelector = () => {
  return (
    <Select>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='Select a audience' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Audience</SelectLabel>
          {AUDIENCE_ORDER.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AudienceSelector;
