import { Router } from 'express';
import { PixController } from '../controllers/pixController';

const router = Router();

router.post('/api/gerar_pix', PixController.gerarPix);
router.get('/health', PixController.health);

export default router;