import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
