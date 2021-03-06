var express = require('express');
var snarkController = require('../controllers/snark/SnarkController');
var router = express.Router();

router.post('/mobile-scan-qr', snarkController.MobileScanQr);

router.get('/check-verification', snarkController.CheckVerification);

/**
 * Check whether pass the verification
 * @param {Integer} userId
 */
router.get('/check-verification', snarkController.CheckVerification);

module.exports = router;