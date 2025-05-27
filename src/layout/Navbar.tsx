import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import logoHorizontal from "../assets/logohorizontal.png";

const Navbar = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <img
                src={logoHorizontal}
                alt="Lions Recipe"
                className="h-10 cursor-pointer"
                onClick={() => navigate("/")}
            />
            {currentUser ? (
                <div className="flex items-center gap-4">
                    <span>{currentUser.displayName}</span>
                    <img
                        src={currentUser.photoURL || ""}
                        alt="profile"
                        onClick={() => navigate("/profile")}
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                </div>
            ) : (
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Sign In
                </button>
            )}
        </nav>
    );
};

export default Navbar;