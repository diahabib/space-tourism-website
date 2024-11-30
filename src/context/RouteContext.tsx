import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

interface RouteContextType {
  currentRoute: string;
}

const RouteContext = createContext<RouteContextType | null>(null);

export const useRoute = (): RouteContextType => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("useRoute must be used within a RouteProvider");
  }
  return context;
};

interface RouteProviderProps {
  children: ReactNode;
}

export const RouteProvider = ({ children }: RouteProviderProps) => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <RouteContext.Provider value={{ currentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
