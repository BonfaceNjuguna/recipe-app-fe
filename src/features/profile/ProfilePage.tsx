import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {currentUser && (
        <div className="space-y-2">
          <p><strong>Name:</strong> {currentUser.displayName}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
