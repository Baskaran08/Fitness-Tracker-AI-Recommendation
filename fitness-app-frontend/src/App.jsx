import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import {  BrowserRouter as Router,  Navigate,  Route, Routes} from "react-router";
import { setCredentials, logout as sliceLogout } from "./store/authSlice";
import ActivitiesPage from "./components/ActivitiesPage";
import ActivityDetail from "./components/ActivityDetail";
import Navbar from "./components/Navbar";

function App() {
  const { token, tokenData, logIn, logOut } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  const handleLogout = () => {
    dispatch(sliceLogout());
    logOut();
  };

  return (
    <Router>
      {!token ? (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-neutral-900 p-6">
          <div className="bg-yellow-400/90 rounded-2xl shadow-[0_8px_40px_rgba(255,221,0,0.3)] p-10 text-center max-w-md w-full transform transition-all duration-300 hover:scale-[1.02] border border-yellow-200/50">
            <h1 className="momo-trust-display text-5xl text-black tracking-tight mb-3">
              Welcome to FitTrack
            </h1>
            <p className="text-black/80 text-lg mb-8 poppins">
              Push your limits. Log in to continue.
            </p>
            <button
              onClick={() => logIn()}
              className="bg-black text-yellow-400 font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,221,0,0.5)] hover:text-white"
            >
              LOGIN
            </button>
          </div>
        </div>
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route
              path="/"
              element={
                token ? (
                  <Navigate to="/activities" replace />
                ) : (
                  <div>Welcome! Please Login.</div>
                )
              }
            />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
