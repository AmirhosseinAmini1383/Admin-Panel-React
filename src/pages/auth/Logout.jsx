import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "../../utils/alerts";

function Logout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    axios
      .get("https://ecomadminapi.azhadev.ir/api/auth/logout", {
        headers: {
          Authorization: `Bearer ${loginToken.token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.removeItem("loginToken");
          setLoading(false);
        } else {
          Alert("!خروج انجام نشد", res.data.message, "error");
        }
      })
      .catch((error) => {
        setLoading(false);
        Alert(
          "!خروج انجام نشد",
          "متاسفانه مشکلی از سمت سرور رخ داده است",
          "error"
        );
      });
  }, []);
  return (
    <div>
      {loading ? (
        <img
          src={"/assets/images/icon/loading.gif"}
          alt="loading"
          className="waiting_center"
        />
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </div>
  );
}

export default Logout;
