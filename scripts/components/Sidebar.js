//
//

const createSidebar = (menuItems) => {
  const aside = document.createElement("aside");
  aside.className = "sidebar";

  const items = menuItems
    .map((item) => {
      const { label, href } = item;

      return `
        <li><a href="${href}">${label}</a></li>
    `;
    })
    .join("");

  aside.innerHTML = `
    <nav class="sidebar-nav">
        <ul>
            ${items}
        </ul>
    </nav>
  `;

  return aside;
};

export default createSidebar;
