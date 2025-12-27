/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { mapPrismaError } from './prisma-errors.js';

// eslint-disable-next-line no-unused-vars
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error('ERROR:', err);

  const mapped = mapPrismaError(err);

  const { status, message, details } = mapped;
  return res.status(mapped.status).json({
    error: {
      status,
      message,
      details,
    },
  });
}
