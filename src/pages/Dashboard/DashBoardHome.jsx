import React from "react";
import { FaCalendarCheck, FaClock, FaCheckCircle, FaMoneyBill } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="p-6">

      {/* Welcome */}
      <h2 className="text-2xl font-bold mb-2">
        Welcome back, Sudipta 👋
      </h2>
      <p className="text-gray-600 mb-6">
        Here’s what’s happening with your bookings today.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <FaCalendarCheck className="text-3xl text-blue-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <h3 className="text-xl font-bold">12</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <FaClock className="text-3xl text-yellow-500" />
          <div>
            <p className="text-gray-500 text-sm">Pending</p>
            <h3 className="text-xl font-bold">3</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <FaCheckCircle className="text-3xl text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-xl font-bold">8</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <FaMoneyBill className="text-3xl text-purple-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Spent</p>
            <h3 className="text-xl font-bold">৳25,000</h3>
          </div>
        </div>

      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow p-5 mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Wedding Decoration</td>
                <td>25 April 2026</td>
                <td className="text-yellow-500">Pending</td>
              </tr>

              <tr>
                <td>Birthday Party</td>
                <td>20 April 2026</td>
                <td className="text-green-500">Completed</td>
              </tr>

              <tr>
                <td>Office Setup</td>
                <td>18 April 2026</td>
                <td className="text-blue-500">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="btn btn-primary">Book Decoration</button>
        <button className="btn btn-outline">View Gallery</button>
        <button className="btn btn-outline">Update Profile</button>
      </div>

    </div>
  );
};

export default DashboardHome;