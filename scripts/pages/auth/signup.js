//
const root = document.getElementById("root");
//

const createSignup = () => {
  root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "auth-wrapper flex-container";

  wrapper.innerHTML = `
        <form class="auth-form form">
          <h2>Create Account</h2>

          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname"/>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email"/>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password"/>
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password"/>
          </div>

          <p>Already Have an Account?
            <a href="#/auth/login">Login</a>
          </p>

          <button type="submit" class="btn btn-primary">Create Account</button>

        </form>
    `;

  root.append(wrapper);
};

export default createSignup;
