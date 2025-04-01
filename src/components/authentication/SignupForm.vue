<template>
  <div class="signup-form">
    <form action="" @submit.prevent="">
      <h1>Creat an account</h1>
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
        <label for="">Password Confirmation</label>
        <input type="text" name="confirmPassword" placeholder="Enter your password again..." />
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  margin-bottom: 0.5em;
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
  align-items: center;

  padding: 1.2em 0;
  max-width: 500px;
  width: 100%;
  border-radius: 25px;

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
  margin-bottom: 1em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
}
.form-group input {
  padding: 1.2em 3em;
  border-radius: 12px;

  outline: none;
}
</style>
