import React from "react";

interface TopBarProps {
  appName: string;
  userName: string;
}

const TopBar: React.FC<TopBarProps> = ({ appName, userName }) => {

  // const onLogout = () => {

  // }

  return (
    <div className="flex justify-between items-center bg-gray-100 px-6 py-4 border-b">
      {/* App Name */}
      <div className="text-xl font-semibold">{appName}</div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700">{userName}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
