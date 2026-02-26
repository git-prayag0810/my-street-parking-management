import express from 'express';
import { getParkingZones, createParkingZone, getZoneSlots } from '../controllers/parkingController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getParkingZones)
    .post(protect, admin, createParkingZone);

router.get('/:id/slots', getZoneSlots);

export default router;
