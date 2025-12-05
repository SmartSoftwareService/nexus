import React from "react";
import { ROUTES } from "../core/constants/routes.constant";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../core/contexts/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isLoggedIn, user, isLoading } = useAuth();

  // Still loading LS data → don't redirect yet
  if (isLoading) {
    return <div></div>;
  }

  // Not logged in
  if (!isLoggedIn || !user) {
    return <Navigate to="/Login" replace />;
  }

   if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "user") return <Navigate to={ROUTES.USER_APPITUDE} replace />;
    if (user.role === "admin") return <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />;
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // ✅ Everything OK → allow access
  return <Outlet />;
};

export default ProtectedRoute;
