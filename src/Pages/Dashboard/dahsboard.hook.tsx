import { useState } from "react";

export const useDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return {
    mobileOpen,
    setMobileOpen,
  };
};
