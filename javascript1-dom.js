// 계산기 노드선택 개선 2
window.addEventListener("load", function () {
  var section2 = document.getElementById("section2");

  var txtX = section2.getElementsByClassName("txt-x")[0];
  var txtY = section2.getElementsByClassName("txt-y")[0];
  var btnAdd = section2.getElementsByClassName("btn-add")[0];
  var txtSum = section2.getElementsByClassName("txt-sum")[0];

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
window.addEventListener("load", function () {
  var txtX = document.getElementById("txt-x");
  var txtY = document.getElementById("txt-y");
  var btnAdd = document.getElementById("btn-add");
  var txtSum = document.getElementById("txt-sum");

  btnAdd.onclick = function () {
    // console.log("ad");
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;
  };
});
