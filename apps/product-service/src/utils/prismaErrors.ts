/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@repo/product-db';

export function mapPrismaError(err: any) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        return {
          status: 409,
          message: 'A record with this unique value already exists.',
        };

      case 'P2025':
        return {
          status: 404,
          message: 'Record not found.',
        };

      case 'P2003':
        return {
          status: 409,
          message: 'Foreign key constraint failed.',
        };

      case 'P2000':
        return {
          status: 400,
          message: 'Invalid data format.',
        };

      default:
    }
  }

  // Not a Prisma error → return generic error
  return {
    status: err.status || 500,
    message: err.message || 'Internal server error',
  };
}
