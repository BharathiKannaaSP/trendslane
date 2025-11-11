import { Router } from 'express';
import { createBannerImage, getAllBannerImage } from '../controllers/bannerImage.controller';

const router: Router = Router();

router.post('/', createBannerImage);
// router.put('/:id', updateBannerImage);
// router.delete('/:id', deleteBannerImage);
// router.get('/:id', getBannerImage);
router.get('/', getAllBannerImage);

export default router;
