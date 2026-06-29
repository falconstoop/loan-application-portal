//
import createLogin from "./pages/auth/login.js";
import createSignup from "./pages/auth/signup.js";
import createNotFound from "./notFound.js";
import createUserDashboard from "./pages/user/userDashboard.js";
//

if (location.hash === "" || location.hash === "#/auth") {
  location.hash = "#/auth/login";
}

const router = () => {
  const currentRoute = location.hash;

  // Login
  if (
    currentRoute === "" ||
    currentRoute === "#/" ||
    currentRoute === "#" ||
    currentRoute === "#/auth/login"
  ) {
    createLogin();
  }
  // Sign Up
  else if (currentRoute === "#/auth/signup") {
    createSignup();
  }
  // User Dashboard
  else if (currentRoute === "#/dashboard/user") {
    createUserDashboard();
  }
  // Not Found
  else {
    createNotFound();
  }
};

export default router;
