import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useSplashRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return {};
};
