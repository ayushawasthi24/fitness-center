import React, { useState } from "react";
import { motion } from "framer-motion";

function LoginPopup({ onClose, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role set to 'customer'

  const handleLogin = () => {
    if (username && password && role) {
      setIsLoggedIn(true);
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-600 max-w-sm w-full">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Login
        </h3>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border-2 border-gray-500 rounded"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border-2 border-gray-500 rounded"
        />

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 p-2 border-2 border-gray-500 rounded bg-white"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="trainer">Trainer</option>
          <option value="staff">Staff</option>
        </select>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400 transition mb-4"
        >
          Login
        </button>

        {/* Login with Google Button */}
        <button className="w-full bg-white border-2 border-gray-500 px-4 py-2 rounded flex items-center justify-center hover:bg-gray-100 transition">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
            alt="Google Logo"
            className="mr-2"
          />
          Login with Google
        </button>

        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-500 text-center"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
}

export default LoginPopup;
