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

    // 조건 다 충족시 + index(메인화면) 이동
    alert("로그인 완료");
    window.location.href = "index.html";
    // window.open("index.html"); 새창에서 열기
  };

  document.querySelector("#login_button").addEventListener("click", login);
});
