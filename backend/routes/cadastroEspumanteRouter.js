const express = require('express');
const router = express.Router();
const cadastroEspumanteController = require('../controllers/cadastroEspumanteController.js');
router.get('/', cadastroEspumanteController.listEntries);
router.get('/:id', cadastroEspumanteController.getEntryById);
router.post('/', cadastroEspumanteController.createEntry);
router.put('/:id', cadastroEspumanteController.updateEntry);
router.delete('/:id', cadastroEspumanteController.deleteEntry);

module.exports = router;
