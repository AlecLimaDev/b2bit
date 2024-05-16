import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";

export const SignInViewModel = () => {
  const [unauthorized, setUnauthorized] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/login/", {
        email: values.email,
        password: values.password,
      });

      const statusOk = response.status === 200;

      if (statusOk) {
        navigate("/home");
      }
    
    } catch (error) {
      console.log(error.response.data.detail);
      setUnauthorized(error.response.data.detail);
    }
  };

  return { handleSubmit, unauthorized };
};
