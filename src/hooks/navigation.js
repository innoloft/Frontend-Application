import React from "react";

const NavigationContext = React.createContext({ isNavigationOpen: false });
const useNavigationContextValue = () => {
  const [isNavOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isNavOpen);
  };
  return {
    isNavOpen,
    toggle
  };
};

const useNavigationContext = () => {
  const NC = React.useContext(NavigationContext);
  if (!NC) {
    throw new Error(
      "useNavigationContext must be within the navigationContext.Provider"
    );
  }
  return NC;
};

export { NavigationContext, useNavigationContext, useNavigationContextValue };
