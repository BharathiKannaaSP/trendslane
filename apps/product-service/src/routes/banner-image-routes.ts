import { Router } from 'express';
import {
  createBannerImage,
  deleteBannerImageById,
  getBannerImageById,
  getListBanner,
  updateBannerById,
} from '../controllers/banner-image-controllers.js';
import { authorize, authorizeCountryAccess } from '../middleware/authMiddleware.js';

const router: Router = Router();

router.post(
  '/createBanner',
  authorize(['superAdmin', 'admin']),
  authorizeCountryAccess(),
  createBannerImage,
);
router.get(
  '/listBanner',
  // authorize(['superAdmin', 'admin', 'user']),
  // authorizeCountryAccess(),
  getListBanner,
);

router.get('/getBannerImageById/:id', getBannerImageById);

router.patch(
  '/updateBanner/:id',
  authorize(['superAdmin', 'admin']),
  authorizeCountryAccess(),
  updateBannerById,
);
router.delete(
  '/deleteBanner/:id',
  authorize(['superAdmin', 'admin']),
  authorizeCountryAccess(),
  deleteBannerImageById,
);

export default router;
