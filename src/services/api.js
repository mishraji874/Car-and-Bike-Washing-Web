import User from '../models/User';
import Booking from '../models/Booking';

export const bookingService = {
  createBooking: async (bookingData) => {
    try {
      const booking = new Booking(bookingData);
      await booking.save();
      return booking._id;
    } catch (error) {
      throw new Error('Error creating booking: ' + error.message);
    }
  },

  getBookings: async (userId, role) => {
    try {
      let query = {};
      if (role === 'customer') {
        query.customerId = userId;
      } else if (role === 'provider') {
        query.providerId = userId;
      }
      
      const bookings = await Booking.find(query)
        .populate('customerId', 'name email phone')
        .populate('providerId', 'name email phone')
        .sort({ createdAt: -1 });
      
      return bookings;
    } catch (error) {
      throw new Error('Error fetching bookings: ' + error.message);
    }
  },

  updateBookingStatus: async (bookingId, status) => {
    try {
      const booking = await Booking.findByIdAndUpdate(
        bookingId,
        { status },
        { new: true }
      );
      return booking;
    } catch (error) {
      throw new Error('Error updating booking status: ' + error.message);
    }
  }
};

export const userService = {
  getProviders: async () => {
    try {
      const providers = await User.find({ role: 'provider' })
        .select('-password')
        .sort({ createdAt: -1 });
      return providers;
    } catch (error) {
      throw new Error('Error fetching providers: ' + error.message);
    }
  },

  getUser: async (userId) => {
    try {
      const user = await User.findById(userId).select('-password');
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        userData,
        { new: true }
      ).select('-password');
      return user;
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }
};

export const paymentService = {
  confirmPayment: async (paymentData) => {
    try {
      // Simulate payment confirmation with a 2-second delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically call your payment gateway API
      // For now, we'll just return a success response
      return {
        success: true,
        transactionId: `txn_${Math.random().toString(36).substr(2, 9)}`,
        amount: paymentData.amount,
        currency: 'USD'
      };
    } catch (error) {
      throw new Error('Payment confirmation failed: ' + error.message);
    }
  }
};