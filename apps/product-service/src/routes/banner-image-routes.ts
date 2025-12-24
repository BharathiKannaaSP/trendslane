import { Router } from 'express';
import {
  createBannerImage,
  deleteBannerImageById,
  getListBanner,
  updateBannerById,
} from '../controllers/banner-image-controllers';

const router: Router = Router();

router.post('/createBanner', createBannerImage);
router.get('/listBanner', getListBanner);
router.patch('/updateBanner/:id', updateBannerById);
router.delete('/deleteBanner/:id', deleteBannerImageById);

export default router;
