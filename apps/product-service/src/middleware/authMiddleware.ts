import { getAuth } from '@clerk/express';
import { Country, CustomJWTSessionClaims, Role, UserRole } from '@workspace/types';
import { NextFunction, Request, Response } from 'express';

declare module 'express' {
  export interface Request {
    userId?: string;
  }
}

export const authorize =
  (allowedRoles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req);

    const userId = auth.userId;

    if (!userId) {
      return res.status(401).json({ error: 'You are not logged in!' });
    }

    const claims = auth.sessionClaims as CustomJWTSessionClaims;

    if (claims?.metadata?.role && !allowedRoles.includes(claims.metadata.role)) {
      return res.status(403).json({ error: 'Forbidden user role' });
    }

    next();
  };

export const authorizeCountryAccess = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req);
    const userId = auth.userId;
    if (!userId) {
      return res.status(401).json({ error: 'You are not logged in!' });
    }

    const claims = auth.sessionClaims as CustomJWTSessionClaims;

    if (claims?.metadata?.role === Role.SuperAdmin) {
      return next();
    }

    if (claims?.metadata?.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden user role' });
    }

    const inputCountries: Country[] = [req.query.country] as Country[];

    if (!inputCountries) {
      return res.status(400).json({ error: 'Country is required' });
    }

    const allowedCountries: Country[] = claims.metadata.country || [];
    const unauthorizedCountries = inputCountries.filter((c) => !allowedCountries.includes(c));

    if (unauthorizedCountries.length > 0) {
      return res.status(403).json({
        error: 'You do not have access to these countries',
        unauthorizedCountries: unauthorizedCountries,
      });
    }
    next();
  };
};
