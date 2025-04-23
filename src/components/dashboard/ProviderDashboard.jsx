import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentBookings = [
    {
      id: 1,
      customer: 'John Doe',
      service: 'Basic Car Wash',
      date: '2024-01-20',
      time: '10:00 AM',
      status: 'In Progress',
      address: '123 Main St, City'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      service: 'Premium Bike Wash',
      date: '2024-01-20',
      time: '2:00 PM',
      status: 'Scheduled',
      address: '456 Oak St, City'
    }
  ];

  const completedBookings = [
    {
      id: 3,
      customer: 'Mike Johnson',
      service: 'Premium Car Wash',
      date: '2024-01-19',
      time: '11:00 AM',
      status: 'Completed',
      address: '789 Pine St, City'
    }
  ];

  const handleStatusUpdate = (bookingId, newStatus) => {
    // Handle status update logic here
    console.log(`Updating booking ${bookingId} to ${newStatus}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Service Provider Dashboard
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <span className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600">
            Available
          </span>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('current')}
            className={`${
              activeTab === 'current'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Current Jobs
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`${
              activeTab === 'completed'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Completed Jobs
          </button>
        </nav>
      </div>

      <div className="mt-8">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {(activeTab === 'current' ? currentBookings : completedBookings).map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {`${booking.date} ${booking.time}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activeTab === 'current' ? (
                      <select
                        value={booking.status}
                        onChange={(e) => handleStatusUpdate(booking.id, e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {booking.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to={`/booking/${booking.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;