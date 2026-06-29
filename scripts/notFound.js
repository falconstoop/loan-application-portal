//
const root = document.getElementById("root");
//

const createNotFound = () => {
  root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "flex-container";
  wrapper.dataset.height = "full";
  wrapper.dataset.flex = "col";
  wrapper.dataset.gap = "lg";

  wrapper.innerHTML = `
    <h2>404 — Page Not Found</h2>

    <a href="#/auth/login" class="btn btn-primary">Back to Login</a>
  `;

  root.append(wrapper);
};

export default createNotFound;
