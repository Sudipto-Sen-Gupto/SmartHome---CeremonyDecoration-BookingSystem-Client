import React from "react";
import UseAuthContext from "../../customHook/UseAuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const DemoAdminLogin = () => {
  const {  userLogin} = UseAuthContext();
  const navigate=useNavigate()

  const handleDemoLogin = async () => {
    const email = "gauravsen123@gmail.com";
    const password = "Gauravgaurav12";

    try {
      const result = await userLogin(email, password);
      navigate('/')
    //   console.log("Admin logged in:", result.user);
   toast(`Log in with Demo id ${result.user.email}`)
    } catch (error) {
      console.error("Demo login failed:", error.message);
    }
  };

  return (
    <button
      onClick={handleDemoLogin}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Login as Admin (Demo)
    </button>
  );
};

export default DemoAdminLogin;