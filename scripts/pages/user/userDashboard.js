//
const root = document.getElementById("root");
//
import createHeader from "../../components/Header.js";
import createSidebar from "../../components/Sidebar.js";
//

const userMenuItems = [
  { label: "Dashboard", href: "#/dashboard/user" },
  { label: "My Loans", href: "#/dashboard/user/loans" },
  { label: "Apply for Loan", href: "#/dashboard/user/apply" },
  { label: "Documents", href: "#/dashboard/user/documents" },
  { label: "Loan Calculator", href: "#/dashboard/user/calculator" },
  { label: "Reports", href: "#/dashboard/user/reports" },
  { label: "Profile", href: "#/dashboard/user/profile" },
];

const createUserDashboard = () => {
  root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "dashboard-wrapper";

  const body = document.createElement("div");
  body.className = "dashboard-body";

  const header = createHeader({ role: "User", username: "John" });
  const sidebar = createSidebar(userMenuItems);

  body.append(sidebar); // main content will go here later too

  wrapper.append(header, body);
  root.append(wrapper);
};

// Shared route helpers (import anywhere)
export const navigateToUserDashboard = () =>
  (location.hash = "#/dashboard/user");

export default createUserDashboard;
