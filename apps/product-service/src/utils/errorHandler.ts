/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { mapPrismaError } from './prismaErrors';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error('ERROR:', err);

  const mapped = mapPrismaError(err);

  return res.status(mapped.status).json({
    error: mapped.message,
  });
}
