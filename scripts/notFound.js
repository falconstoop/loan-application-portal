//
const root = document.getElementById("root");
//

const createNotFound = () => {
  root.innerHTML = "";

  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Page Not Found</h2>
  `;

  root.append(div);
};

export default createNotFound;
