document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  /*
  document.querySelector("li#home").addEventListener("click", () => {
    alert("Home 으로 가기");
  });
  document.querySelector("li#dept").addEventListener("click", () => {
    alert("거래처 관리로 가기");
  });
  document.querySelector("li#product").addEventListener("click", () => {
    alert("상품 관리로 가기");
  });
  */

  // event 버블링을 사용해서 코드 짜기
  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;

    if (nav_text === "Home") {
      document.location.href = "./index.html"; // js 를 이용해 페이지 이동
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("안녕 잘가@@@@@@@");
    } else if (nav_text === "관리자") {
      document.location.href = "https://naver.com";
    }
  };

  //   nav_ul.onClick = nav_click  << 가끔 브라우저마다 안되는 경우가 있음
  /*
  if (nav_ul) {
    nav_ul.addEventListener("click", nav_click); // null point exception 코드
  }  
  */
  // null safe 코드
  // nav_ul 객체변수가 null 이 아닐경우에만 add...*() 함수를 실행하라
  // null 이면 무시하라
  nav_ul?.addEventListener("click", nav_click);
});
