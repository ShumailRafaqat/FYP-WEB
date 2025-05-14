import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You will add backend login here later
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFD4C9] px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#831418]">Admin Login</h2>
          <p className="text-[#B17f6B] mt-2">Please enter your credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-1 text-[#831418] font-semibold">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B17f6B]"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-[#831418] font-semibold">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B17f6B]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#831418] hover:bg-[#B17f6B] text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Only authorized admins can access this panel.
        </p>
      </div>
    </div>
  );
}
