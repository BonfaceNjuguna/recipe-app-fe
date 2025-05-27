import { Routes, Route } from "react-router-dom";
// import RecipeList from "../features/recipes/RecipeList";
// import RecipeDetail from "../features/recipes/RecipeDetail";
import ProfilePage from "../features/profile/ProfilePage";
import Login from "../features/auth/Login";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<RecipeList />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/recipes/:id" element={<RecipeDetail />} /> */}
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
