'use client';
import { Typography } from '@workspace/ui/components/typography';
import React, { useState } from 'react';
import { Field, FieldError, FieldGroup, FieldLabel } from '@workspace/ui/components/field';
import { Button } from '@workspace/ui/components/button';
import { toast } from 'sonner';
import { useAuth } from '@clerk/nextjs';
import { allowedCountries, AUDIENCE_ORDER, getFullCountryName, Role } from '@workspace/types';
import { useMutation } from '@tanstack/react-query';
import { bannerImageFormSchema } from '@/utils/validations/banner-image-form-schema';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { isSuperAdmin } from '@/utils/userRole';
import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover';
import { cn } from '@workspace/ui/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@workspace/ui/components/command';
import { Input } from '@workspace/ui/components/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import Image from 'next/image';
import { Prisma } from '@workspace/product-db';
import { useGetUserAccessCountryAndRole } from '@/hooks/use-get-user-access-country';

const EditSingleBanner = ({ data }: { data: Prisma.BannerImageModel }) => {
  const router = useRouter();
  const pathname = useParams<{ country: string }>();
  const [bannerImageFile, setBannerImageFile] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);
  const form = useForm<z.infer<typeof bannerImageFormSchema>>({
    resolver: zodResolver(bannerImageFormSchema),
    defaultValues: {
      country: data.country,
      audience: data.audience,
      title: data.title,
      imageUrl: data.imageUrl,
    },
  });
  const { getToken } = useAuth();
  const { role } = useGetUserAccessCountryAndRole();

  const mutation = useMutation({
    mutationFn: async (payload: z.infer<typeof bannerImageFormSchema>) => {
      const token = await getToken();
      const baseUrl = `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/updateBanner/${data.id}`;
      const url = role === Role.SuperAdmin ? baseUrl : `${baseUrl}?country=${pathname.country}`;

      const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      return result;
    },
    onSuccess: () => {
      toast.success(`Updated banner successfully`);
      form.reset();
      setBannerImageFile(null);
      setFileInputKey((k) => k + 1);
      router.push('/banner-image');
    },
    onError: (err: Error) => {
      toast.error(`Failed to create banner image: ${err.message || err}`);
    },
  });

  return (
    <div className='pt-4 px-4'>
      <Typography>Edit</Typography>
      <form
        className='py-4'
        id='banner-image'
        onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
      >
        <div className='grid flex-1 auto-rows-min gap-6 px-2' id='edit-banner-image'>
          <FieldGroup>
            {isSuperAdmin(role) ? (
              <Controller
                name='country'
                control={form.control}
                render={({ field, fieldState }) => {
                  const selected = field.value || [];

                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Country</FieldLabel>

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
                            {selected.length ? (
                              allowedCountries
                                .filter((c) => selected.includes(c))
                                .map((c) => c)
                                .join(', ')
                            ) : (
                              <Typography className='opacity-50 normal-case font-normal'>
                                Select countries
                              </Typography>
                            )}
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
            ) : (
              <div>
                <Controller
                  control={form.control}
                  name='country'
                  render={({ field, fieldState }) => {
                    if (!field.value) {
                      field.onChange([pathname.country]);
                    }
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Country</FieldLabel>
                        <Input
                          disabled
                          value={pathname.country}
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
                <Typography className='normal-case'>
                  {getFullCountryName(pathname.country)}
                </Typography>
              </div>
            )}

            <Controller
              control={form.control}
              name='audience'
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Audience</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value ?? ''}
                    disabled
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className='w-full' aria-invalid={fieldState.invalid}>
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
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name='title'
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                  <Input
                    {...field}
                    placeholder='Enter banner title'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name='imageUrl'
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Upload Image</FieldLabel>
                  <Input
                    key={fileInputKey}
                    type='file'
                    accept='image/*'
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return '';
                      try {
                        toast.info('Uploading image...');
                        setImageUploading(true);
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', 'trendslane');

                        const response = await fetch(
                          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/image/upload`,
                          {
                            method: 'POST',
                            body: formData,
                          },
                        );

                        const data = await response.json();

                        if (data.secure_url) {
                          field.onChange(data.secure_url);
                          setBannerImageFile(data.secure_url);
                          setImageUploading(false);
                          toast.success('Image uploaded successfully!');
                        }
                      } catch {
                        toast.error('Failed to upload image. Please try again.');
                        setImageUploading(false);
                      }
                    }}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

                  <div className='w-40! h-40 relative'>
                    {(bannerImageFile || data.imageUrl) && (
                      <Image
                        src={bannerImageFile || data.imageUrl}
                        fill
                        alt={field.name}
                        className='object-cover rounded-sm'
                      />
                    )}
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </div>
        <Field className='mt-4' orientation='horizontal'>
          <Button
            type='button'
            variant='outline'
            onClick={() => {
              form.reset();
              setBannerImageFile(null);
              setFileInputKey((k) => k + 1);
            }}
          >
            Reset
          </Button>
          <Button
            type='submit'
            form='banner-image'
            disabled={mutation.isPending || imageUploading}
            className='disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {mutation.isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </Field>
      </form>
    </div>
  );
};

export default EditSingleBanner;
