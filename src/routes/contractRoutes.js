import express from 'express';
import contractController from '../controllers/contractController.js';

const router = express.Router();

router.get('/', contractController.getAllContracts);
router.get('/:id', contractController.getContractById);
router.post('/', contractController.createContract);
router.put('/:id', contractController.updateContract);
router.delete('/:id', contractController.deleteContract);

export default router;
