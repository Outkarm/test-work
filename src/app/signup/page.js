"use client";
import NavBar from "../components/NavBar";
import AuthForm from "../components/AuthForm";

const signup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NavBar />
      <AuthForm signup={true} />
    </div>
  );
};
export default signup;
