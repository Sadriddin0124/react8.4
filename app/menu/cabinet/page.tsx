import Link from "next/link";
import React from "react";
import { Button } from "@mui/material";
const Cabinet = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col gap-[10px]">
      <Link href="/menu/cabinet/settings">
        <Button variant="contained" className="bg-blue-400">Go to Settings</Button>
      </Link>
      <Link href="/menu/cabinet/dashboard">
        <Button variant="contained" className="bg-blue-400">Go to Dashboard</Button>
      </Link>
    </div>
  );
};

export default Cabinet;
