import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SigninPage from "./Pages/SigninPage";
import { useEffect } from "react";
import HomePage from "./Pages/HomePage";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      navigate("/auth/sign-in");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/sign-in" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
