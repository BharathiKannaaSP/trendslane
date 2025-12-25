/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useAuth } from '@clerk/nextjs';
import { ColumnDef } from '@tanstack/react-table';
import { Prisma } from '@workspace/product-db';
import { Country } from '@workspace/types';
import { Button } from '@workspace/ui/components/button';
import { Checkbox } from '@workspace/ui/components/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';
import { Typography } from '@workspace/ui/components/typography';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

export type BannerImage = Prisma.BannerImageModel;

export const columns: ColumnDef<BannerImage>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        // onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={table.getIsAllRowsSelected() || (table.getIsSomeRowsSelected() && 'indeterminate')}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
        aria-label='Select row'
      />
    ),
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          className='p-0! m-0'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className='h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'audience',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='p-0! m-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Audience
          <ArrowUpDown className='h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'imageUrl',
    header: () => 'Banner Image',
    cell: ({ row }) => {
      const imageUrl = row.getValue('imageUrl') as string;
      return (
        <div className='relative h-16 w-16'>
          <Image src={imageUrl} alt='Banner Image' fill className='rounded-full object-cover' />
        </div>
      );
    },
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: ({ row }) => {
      const countryData = row.getValue('country') as Country[];
      const { country } = useParams();
      const isActive = countryData.filter((c) => c.includes(country as Country));
      const isNotActive = countryData.filter((c) => !c.includes(country as Country));
      return (
        <div>
          <Typography>{isActive}</Typography>

          <Typography className='text-muted-foreground ml-2'>{isNotActive.join(', ')}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: 'active',
    header: ({ column }) => {
      return (
        <Button
          className='p-0! m-0'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Active
          <ArrowUpDown className='h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isActive = row.getValue('active') as boolean;
      return <span>{isActive ? 'Yes' : 'No'}</span>;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const router = useRouter();
      const bannerImage: Prisma.BannerImageModel = row.original;
      const { getToken } = useAuth();
      const { country } = useParams();
      const handleDeleteBannerImage = async (id: number) => {
        try {
          const token = await getToken();
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/deleteBanner/${id}?country=${country}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            },
          );
          if (response.ok) {
            toast.success('Banner image deleted successfully');
            router.refresh();
          } else {
            toast.error('Failed to delete banner image');
          }
        } catch (error) {
          console.error('Failed to delete banner image', error);
        }
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open Actions menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(bannerImage.id.toString())}
            >
              Copy Banner ID
            </DropdownMenuItem>
            <DropdownMenuItem>Edit Banner</DropdownMenuItem>
            <DropdownMenuItem>View Banner</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant='destructive'
              onClick={() => handleDeleteBannerImage(bannerImage.id)}
            >
              Delete Banner
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
