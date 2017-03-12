import { models } from '../config/constants'
import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.ObjectId

let schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  teams: [{type: ObjectId, ref: models.team.name}]
});

module.exports = mongoose.model(models.organization.name, schema);