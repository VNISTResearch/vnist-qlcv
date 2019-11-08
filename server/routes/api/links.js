const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const LinkController = require("../../controllers/LinkController");

router.get('/', auth, LinkController.get);
router.get('/:id', auth, LinkController.getById);
router.get('/role/:id', auth, LinkController.getLinkByRole);
router.post('/', auth, LinkController.create);
router.patch('/:id', auth, LinkController.edit);
router.post('/add-role', auth, LinkController.addRoleToLink);
router.delete('/:id', auth, LinkController.delete);

module.exports = router;
