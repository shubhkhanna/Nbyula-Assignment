import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import CoursePage from "./pages/CoursePage";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Protected Routes */}
        <Route element={<Auth />}>
          <Route path="/" element={<CoursePage />} />
        </Route>

        {/* Public Routes */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default App;
