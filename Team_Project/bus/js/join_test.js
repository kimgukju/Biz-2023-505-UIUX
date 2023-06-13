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
  };
  document.querySelector("#signUp").addEventListener("click", join);
});
