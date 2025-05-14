import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      alert(`File ${selectedFile.name} uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#EFD4C9]">
      {/* Sidebar */}
      <div className="w-64 bg-[#831418] text-white p-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Admin Panel</h2>
        <ul>
          <li className="mb-6 flex items-center">
            <i className="fas fa-tachometer-alt text-2xl mr-3"></i>
            <Link to="/admin-dashboard" className="text-lg hover:text-[#B17f6B]">Dashboard</Link>
          </li>
          <li className="mb-6 flex items-center">
            <i className="fas fa-users text-2xl mr-3"></i>
            <Link to="/manage-users" className="text-lg hover:text-[#B17f6B]">Manage Users</Link>
          </li>
          <li className="mb-6 flex items-center">
            <i className="fas fa-cogs text-2xl mr-3"></i>
            <Link to="/settings" className="text-lg hover:text-[#B17f6B]">Settings</Link>
          </li>
          <li className="mb-6 flex items-center">
            <i className="fas fa-upload text-2xl mr-3"></i>
            <Link to="/upload-design" className="text-lg hover:text-[#B17f6B]">Upload Design</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#831418] mb-6">Dashboard</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#831418]">Total Users</h3>
            <p className="text-3xl font-bold text-[#B17f6B]">1,250</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#831418]">Active Vendors</h3>
            <p className="text-3xl font-bold text-[#B17f6B]">800</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#831418]">Pending Requests</h3>
            <p className="text-3xl font-bold text-[#B17f6B]">50</p>
          </div>
        </div>

        {/* Upload Design Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#831418] mb-4">Upload Design</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-[#831418] mb-4">Upload your design images here.</p>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleFileUpload}
              className="bg-[#831418] text-white p-4 rounded-lg shadow-lg hover:bg-[#B17f6B] transition duration-300"
            >
              Upload Design
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#831418] mb-4">Quick Actions</h3>
          <div className="flex space-x-4">
            <button className="bg-[#831418] text-white p-4 rounded-lg shadow-lg hover:bg-[#B17f6B] transition duration-300">
              Add New User
            </button>
            <button className="bg-[#B17f6B] text-white p-4 rounded-lg shadow-lg hover:bg-[#831418] transition duration-300">
              Manage Vendors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
