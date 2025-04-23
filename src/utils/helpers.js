export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (time) => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-]{10,}$/;
  return re.test(phone);
};

export const getBookingStatusColor = (status) => {
  const statusColors = {
    'pending': 'yellow',
    'confirmed': 'green',
    'completed': 'blue',
    'cancelled': 'red'
  };
  return statusColors[status.toLowerCase()] || 'gray';
};

export const generateTimeSlots = (startTime = '09:00', endTime = '17:00', interval = 30) => {
  const slots = [];
  let currentTime = new Date(`2000-01-01T${startTime}`);
  const end = new Date(`2000-01-01T${endTime}`);

  while (currentTime <= end) {
    slots.push(
      currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    );
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return slots;
};