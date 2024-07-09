import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SigninPage from "./Pages/SigninPage";
import { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import Header from "./custom/Header";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const { isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      navigate("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/sign-in" element={<SigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
