// childNodes
window.addEventListener("load", function () {
  var section5 = document.getElementById("section5");
  var box = section5.querySelector(".box");

  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hello";
  input2.value = "okey";
});

// Selectors API
window.addEventListener("load", function () {
  var section4 = document.getElementById("section4");

  var txtX = section4.querySelector("input[name='x']"); // css선택자 설명하기 위해..
  var txtY = section4.querySelector(".txt-y");
  var btnAdd = section4.querySelector(".btn-add");
  var txtSum = section4.querySelector(".txt-sum");

  btnAdd.onclick = function () {
    // console.log("ad");
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;
  };
});

// 계산기 노드선택 개선 2
window.addEventListener("load", function () {
  var section3 = document.getElementById("section3");

  var txtX = section3.getElementsByClassName("txt-x")[0];
  var txtY = section3.getElementsByClassName("txt-y")[0];
  var btnAdd = section3.getElementsByClassName("btn-add")[0];
  var txtSum = section3.getElementsByClassName("txt-sum")[0];

  btnAdd.onclick = function () {
    // console.log("ad");
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;
  };
});

window.addEventListener("load", function () {
  var section2 = document.getElementById("section2");
  var inputs = document.getElementsByTagName("input");

  var txtX = inputs[0];
  var txtY = inputs[1];
  var btnAdd = inputs[2];
  var txtSum = inputs[3];

  btnAdd.onclick = function () {
    // console.log("ad");
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;
  };
});

// 계산기 예제
/*
window.addEventListener("load", function () {
  var txtX = document.getElementById("txt-x");
  var txtY = document.getElementById("txt-y");
  var btnAdd = document.getElementById("btn-add");
  var txtSum = document.getElementById("txt-sum");

  btnAdd.onclick = function () {
    // console.log("ad");
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum1.value = x + y;
  };
});
*/
