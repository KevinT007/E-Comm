// Drop down menu for smaller devices
function menu() {
  var x = document.getElementById("topnavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
// Determine the vairable for each element.
var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });
  //Determine the what change will happen you click <<.
  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  //Determine the what change will happen you click >>.
  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  // What will change slides when you click the arrows.
  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });
  // Sets time for slide change.
  setInterval(function () {
    nextSlide();
  }, 6000);
};

window.onload = function () {
  responsiveSlider();
};
// Resourse https://dev.to/code_mystery/automatic-image-slider-using-html-css-javascript-nf8
// Json...
// fetch("shop.json")
//   .then((response) => response.json())
//   .then((data) => getItems(data));

// function getItems(data) {
//   let output = "";
//   data.forEach((items) => {
//     output += `

//         <div id="item-img">
//           <img src="items.img" alt="items.name"></img>
//         </div>
//         <div>
//           <h2>${items.name}</h2>
//           <h3>${items.price}</h3>
//           <p>${items.dev}</p>
//           <button id="buy">BUY</button>
//         </div>
//       `;
//   });
//   document.getElementById("shopping").innerHTML = output;
// }
fetch;
