export const isAdmin = (userRole: 'superAdmin' | 'admin' | 'user') => {
  return userRole === 'admin';
};

export const isSuperAdmin = (userRole: 'superAdmin' | 'admin' | 'user') => {
  return userRole === 'superAdmin';
};
