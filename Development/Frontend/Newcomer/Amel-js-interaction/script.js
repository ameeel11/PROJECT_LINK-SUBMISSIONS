document.getElementById("changeColorBtn").onclick = function() {
  const colors = ["#f5f3b8ff", "#e0f7fa", "#b5feb4ff", "#f7c3ffff"];
  const chosen = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = chosen;
  alert("Background diubah!");
};
