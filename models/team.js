import { models } from '../config/constants'
import mongoose from 'mongoose'
import uuid from 'uuid'
const ObjectId = mongoose.Schema.ObjectId


let schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  members:{type: Array, required: true},
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  collaborators: [{type: ObjectId, ref: models.user.name}]
});

module.exports = mongoose.model(models.team.name, schema);