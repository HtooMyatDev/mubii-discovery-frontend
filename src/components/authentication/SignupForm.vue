<template>
  <div class="signup-form">
    <form action="" @submit.prevent="">
      <div class="header-wrapper">
        <h2 class="header">Welcome to Mubii Discovery!</h2>
        <h3 class="header">Register an account</h3>
      </div>
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" name="name" placeholder="Enter your name..." />
      </div>

      <div class="form-group">
        <label for="">Email</label>
        <input type="email" name="email" placeholder="Enter your email..." />
      </div>

      <div class="form-group">
        <label for="">Password</label>
        <input type="text" name="password" placeholder="Enter your password..." />
      </div>

      <div class="form-group">
        <label for="">Retype Password</label>
        <input type="text" name="confirmPassword" placeholder="Enter your password again..." />
      </div>

      <div class="form-group">
        <button type="submit" class="btn">Register</button>
      </div>

      <div class="form-group">
        <span style="color: black">Already have an account? <a href="/login">Login</a></span>
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
  border: 2px solid var(--sidebar-bg-color);
  outline: none;
}

.form-group a {
  color: var(--sidebar-bg-color);
  font-weight: 600;
}

.btn {
  background-color: white;
  color: var(--sidebar-bg-color);

  border: 2px solid var(--sidebar-bg-color);
  border-radius: 12px;

  cursor: pointer;

  padding: 12px 10px;
  width: 100%;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background-color: var(--sidebar-bg-color);
  color: white;
}
</style>
