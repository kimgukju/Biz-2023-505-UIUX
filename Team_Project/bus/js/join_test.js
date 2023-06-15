const INPUT_INDEX = {
  EMAIL: 0,
  WRITER: 1,
  PASSWORD: 2,
  RE_PASSWORD: 3,
};

document.addEventListener("DOMContentLoaded", () => {
  const join = () => {
    const join_inputs = document.querySelectorAll(".wrapper input");
    if (!join_inputs[INPUT_INDEX.EMAIL].value) {
      alert("이메일은 필수 항목입니다");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }
    if (!join_inputs[INPUT_INDEX.WRITER].value) {
      alert("이름은 필수 항목입니다");
      join_inputs[INPUT_INDEX.WRITER].focus();
      return false;
    }
    // 비밀번호 항목
    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("비밀번호는 필수 항목입니다");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    // const password_check =
    //   /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    // if (!password_check.test(input_password)) {
    //   alert(
    //     "비밀번호는 특수문자, 영문대소문자, 숫자 포함하여 8 ~ 15 자리 형식으로 검사하세요"
    //   );
    //   join_inputs[INPUT_INDEX.PASSWORD].focus();
    //   return false;
    // }
    // 비밀번호 확인 항목
    const input_re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!input_re_password) {
      alert("비밀번호 확인은 필수 항목입니다");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
    if (input_password !== input_re_password) {
      alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다");
      join_inputs[INPUT_INDEX.PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    // const select = document.getElementById("area").value;
    if (!document.getElementById("area").value) {
      alert("지역을 선택해주세요");
      return false;
    }

    // if(!document) {
    //   alert("성별을 선택해주세요")
    //   return false;
    // }
  };
  document.querySelector("#signUp").addEventListener("click", join);
});
