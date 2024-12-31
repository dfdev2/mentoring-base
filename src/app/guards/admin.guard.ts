import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from '../interfaces/userRole.interface';
import { UserServices } from '../services/user.services';
import { map } from 'rxjs';

export const isAdminGuard: CanActivateFn = () => {
  const userServices = inject(UserServices);
  const router = inject(Router);

  return userServices.user$.pipe(
    map((user: UserRole | null) => {
      if (user?.isAdmin) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};
