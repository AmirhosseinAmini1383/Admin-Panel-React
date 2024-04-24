import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      axios
        .get("https://ecomadminapi.azhadev.ir/api/auth/user", {
          headers: {
            Authorization: `Bearer ${loginToken.token}`,
          },
        })
        .then((result) => {
          setIsLogin(result.status == 200 ? true : false);
          setLoading(false);
        })
        .catch((err) => {
          localStorage.removeItem("loginToken");
          setIsLogin(false);
          setLoading(false);
        });
    } else {
      setIsLogin(false);
      setLoading(false);
    }
  }, []);
  return [isLogin, loading];
};
