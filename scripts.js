function startGame(choice) {
    var dice1Element = document.getElementById("dice1");
    var dice2Element = document.getElementById("dice2");
    var dice3Element = document.getElementById("dice3");
    var resultElement = document.getElementById("result");
    var countdownElement = document.getElementById("countdown");
    // Ẩn kết quả trước đó (nếu có)
    resultElement.innerText = "";
    // Ẩn đồng hồ đếm ngược trước khi bắt đầu
    countdownElement.style.display = "none";
    // Bắt đầu hiển thị đồng hồ đếm ngược
    countdownElement.style.display = "block";
    countdownElement.innerText = "5";
    var countdown = 5;
    var countdownInterval = setInterval(function() {
      countdown--;
      countdownElement.innerText = countdown;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        startDiceRoll();}}, 1000);
    function startDiceRoll() {
      countdownElement.style.display = "none";
      // Tạo số ngẫu nhiên từ 1 đến 6 cho 3 xúc xắc
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;
      var dice3 = Math.floor(Math.random() * 6) + 1;
      // Hiển thị hình xúc xắc tương ứng
      dice1Element.innerText = dice1;
      dice2Element.innerText = dice2;
      dice3Element.innerText = dice3;
      // Tính tổng 3 số
      var total = dice1 + dice2 + dice3;
      // Kiểm tra và in kết quả
      if (total < 10 ) {
        resultElement.innerText = "Xỉu đó, nhắm húp nổi hông em??";
      } else {
        resultElement.innerText = "Tài! Tài! Lụm chưa??";
      }
    }
  }