import { Router } from 'express';
import {
  createBannerImage,
  getListBanner,
  updateBannerById,
  deleteBannerImageById,
} from '../controllers/bannerImage.controller';

const router: Router = Router();

router.post('/createBanner', createBannerImage);
router.get('/listBanner', getListBanner);
router.patch('/updateBanner/:id', updateBannerById);
router.delete('/deleteBanner/:id', deleteBannerImageById);

export default router;
