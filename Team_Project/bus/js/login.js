document.addEventListener("DOMContentLoaded", () => {
  const login = () => {
    const user_email = document.querySelector("input[name='email'] ");
    const user_password = document.querySelector("input[name='password']");

    if (!user_email.value) {
      alert("이메일을 입력해주세요");
      user_email.focus();
      return false;
    }
    if (!user_password.value) {
      alert("비밀번호를 입력해주세요");
      user_password.focus();
      return false;
    }
  };

  document.querySelector("#login_button").addEventListener("click", login);
});
