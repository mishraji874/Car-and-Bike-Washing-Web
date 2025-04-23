import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  service: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  price: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  specialInstructions: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;