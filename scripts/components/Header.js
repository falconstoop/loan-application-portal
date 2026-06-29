//
//

const createHeader = ({ role, username }) => {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `

    <!-- Left side -->
    <div class="header-left">
        <span class="header-brand">LoanPortal</span>
        <span class="header-separator">|</span>
        <span class="header-role">${role} Dashboard</span>
    </div>

    <!-- Right side -->
    <div class="header-right">
        <span class="header-welcome">Welcome, <strong>${username}</strong></span>

            <!-- Dark Mode Toggle -->
        <label class="theme-toggle">
          <input type="checkbox">
          <span class="toggle-slider"></span>
        </label>
    </div>
    `;

  return header;
};

export default createHeader;
