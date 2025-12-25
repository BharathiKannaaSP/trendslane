import { Country } from '../common/common';

export const autoAdminPrefixSection = ['country', 'details', 'banner-image'];

export type UserRole = 'superAdmin' | 'admin' | 'user';

export interface CustomJWTSessionClaims {
  metadata?: {
    role?: UserRole;
    country?: Country[];
  };
}
