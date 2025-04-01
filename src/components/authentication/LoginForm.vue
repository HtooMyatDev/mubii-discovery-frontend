<template>
  <div class="signup-form">
    <form action="" @submit.prevent="">
      <div class="header-wrapper">
        <h2 class="header">Welcome back to Mubii Discovery!</h2>
        <h3 class="header">Login Form</h3>
      </div>

      <div class="form-group">
        <label for="">Email</label>
        <input type="email" name="email" placeholder="Enter your email..." />
      </div>

      <div class="form-group">
        <label for="">Password</label>
        <input type="password" name="password" placeholder="Enter your password..." />
      </div>

      <div class="form-group button-group">
        <button type="submit" class="btn">Login</button>
        <span style="margin-bottom: 1.2em;"> or </span>
        <button type="button" class="google btn">Continute with Google</button>
        <button type="button" class="github btn">Continute with Github</button>
      </div>

      <div class="login-group">
        <span style="margin-right: 5px; color: black">Don't have an account yet?</span>
        <div>
          <a href="/signup">
            <p>Register</p>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  margin-bottom: 0.5em;
  text-align: center;
}

.signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-form form {
  display: flex;
  flex-direction: column;

  padding: 1.2em 2em;
  max-width: 500px;
  width: 100%;
  border-radius: 15px;

  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  color: var(--sidebar-bg-color);
  background-color: white;
}
.form-group {
  margin-bottom: 2em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 800;
}
.form-group input {
  width: 100%;
  padding: 12px 10px;
  border-radius: 12px;
  border: 2px solid white;
  outline: none;
  transition: 0.5s ease;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.form-group input::placeholder {
  opacity: 0.5;
  font-weight: 600;
}

.form-group input:focus {
  border-bottom: 2px solid var(--sidebar-bg-color);
  transition: 0.5s ease;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.login-group {
  display: flex;
  justify-content: center;
}

.button-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-group p {
  color: var(--sidebar-bg-color);
  font-weight: 600;

  margin-inline: auto;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid var(--sidebar-bg-color);

  animation: typing 2s steps(9) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
.btn {
  background-color: white;
  color: var(--sidebar-bg-color);

  border: 2px solid var(--sidebar-bg-color);
  border-radius: 12px;

  cursor: pointer;

  padding: 12px 10px;
  margin-bottom: 1.2em;
  width: 100%;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background-color: var(--sidebar-bg-color);
  color: white;
}
</style>
