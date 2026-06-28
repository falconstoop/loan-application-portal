//
const root = document.getElementById("root");
//

const createLogin = () => {
  root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "auth-wrapper flex-container";

  wrapper.innerHTML = `
        <form class="auth-form form">
          <h2>Login</h2>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email"/>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password"/>
          </div>

          <p>Dont Have an Account? 
            <a href="#/auth/signup">Sign Up</a>
          </p>

          <button type="submit" class="btn btn-primary">Login</button>

        </form>
    `;

  root.append(wrapper);
};

export default createLogin;
