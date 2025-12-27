import { useUser } from '@clerk/nextjs';
import { Country, UserRole } from '@workspace/types';

export type UserAccessCountryAndRole = {
  role: UserRole | undefined;
  userAccessCountry: Country[] | undefined;
};

export const useGetUserAccessCountryAndRole = (): UserAccessCountryAndRole => {
  const { user } = useUser();

  if (!user)
    return {
      role: undefined,
      userAccessCountry: undefined,
    };

  const role = user.publicMetadata.role as UserRole;
  const userAccessCountry = user.publicMetadata.country as Country[];

  return {
    role,
    userAccessCountry,
  };
};
