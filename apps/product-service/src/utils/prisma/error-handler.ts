/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { mapPrismaError } from './prisma-errors';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  next: NextFunction,
) {
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
