function reduceCourse(btn) {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");

  // =====================================================================
  let leftCourse = document.getElementById("course-left").innerText;
  let LearntCourse = document.getElementById("course-complete").innerText;
  let convToNumber = parseInt(leftCourse);
  let convToNumberLearntCourse = parseInt(LearntCourse);
  alert("Board Updated Successfully");
  let pressedMassage = btn.getAttribute("massage");
  if (convToNumber > 0) {
    convToNumber--;
    convToNumberLearntCourse++;
    document.getElementById("course-left").innerText = convToNumber;
    document.getElementById("course-complete").innerText =
      convToNumberLearntCourse;

    let newDiv = document.createElement("div");
    newDiv.className = "Dinamic-Masage-Style";
    newDiv.innerHTML = `
      <p>You have completed the ${pressedMassage} course at: ${hours}:${minutes}</p>
      
      `;
    document.getElementById("dinamic-msg").appendChild(newDiv);
    btn.disabled = true;
  }
}
document
  .getElementById("second-container")
  .addEventListener("click", function () {
    window.location.href = "/blog.html";
  });

document
  .getElementById("history-clear-btn")
  .addEventListener("click", function () {
    document.getElementById("dinamic-msg").innerHTML = ``;
  });

//   ============================

document
  .getElementById("chngBodyColor")
  .addEventListener("click", function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
