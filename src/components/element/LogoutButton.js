"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <button onClick={signOut} className="flex gap-x-2 text-[1.1rem] items-center text-colorRed">
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
