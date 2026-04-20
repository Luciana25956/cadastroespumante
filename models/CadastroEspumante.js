const mongoose = require('mongoose');

const cadastroEspumanteSchema = new mongoose.Schema(
  {
    cadastroEspumante: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    happenedAt: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('CadastroEspumante', cadastroEspumanteSchema);