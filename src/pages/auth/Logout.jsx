import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "../../utils/alerts";
import { logoutService } from "../../services/auth";
import SpinnerLoad from "../../components/SpinnerLoad";

function Logout() {
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
      } else {
        Alert("!خروج انجام نشد", res.data.message, "error");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert(
        "!خروج انجام نشد",
        "متاسفانه مشکلی از سمت سرور رخ داده است",
        "error"
      );
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <div>
      {loading ? (
        <SpinnerLoad colorClass={"text-primary"} waiting_center={true} />
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </div>
  );
}

export default Logout;
