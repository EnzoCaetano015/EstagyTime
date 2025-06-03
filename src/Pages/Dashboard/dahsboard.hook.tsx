import { useState } from "react";

export const useDashboard = <T extends string>(params: {
  initialScreen: T;
  renderMap: Record<T, React.ReactNode>;
}) => {
  const { initialScreen, renderMap } = params;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<T>(initialScreen);

  const renderContent = () => renderMap[currentScreen] || null;

  return {
    mobileOpen,
    setMobileOpen,
    currentScreen,
    setCurrentScreen: setCurrentScreen as unknown as (screen: string) => void,
    renderContent,
  };
};
