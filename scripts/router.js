//
import createLogin from "./pages/auth/login.js";
import createSignup from "./pages/auth/signup.js";
import createNotFound from "./notFound.js";
//

if (location.hash === "" || location.hash === "#/auth") {
  location.hash = "#/auth/login";
}

const router = () => {
  const currentRoute = location.hash;

  if (
    currentRoute === "" ||
    currentRoute === "#/" ||
    currentRoute === "#" ||
    currentRoute === "#/auth/login"
  ) {
    createLogin();
  } else if (currentRoute === "#/auth/signup") {
    createSignup();
  } else {
    createNotFound();
  }
};

export default router;
