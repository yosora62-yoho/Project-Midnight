window.checkLogin = function() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  let m = document.getElementById("msg");
  let now = new Date();
  let lockTime = localStorage.getItem("lockUntil");

  if (lockTime && now.getTime() < lockTime) {
    m.innerText = "โดนล็อกอยู่! รอให้ครบ 1 ชม. ก่อนนะ";
    return;
  }

  if (now.getHours() !== 0) {
    m.innerText = "เข้าได้แค่ช่วงเที่ยงคืนถึงตีหนึ่งเท่านั้น";
    return;
  }

  if (u === "Delta_Epsilon_01" && p === "(x+y)^n=Sum(k=0,n){n\\k*x^k*y^{n-k}}!") {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  } else {
    let nextTry = now.getTime() + (60 * 60 * 1000);
    localStorage.setItem("lockUntil", nextTry);
    m.innerText = "รหัสผิด! ล็อก 1 ชม.";
  }
}