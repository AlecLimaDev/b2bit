import { useNavigate } from "react-router-dom";

export function HeaderViewModel() {
    const navigate = useNavigate()
    
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/");
    }

    return {
        logout
    };

}