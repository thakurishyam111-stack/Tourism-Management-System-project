import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Service title is required'], trim: true },
  desc: { type: String, required: [true, 'Service description is required'], trim: true },
  features: { type: [String], default: [] },
  img: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;