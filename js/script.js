// Stripe Gradient
(function() {
    'use strict';

    $('#stripe').gradient({
colors: ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57']
});

})();

// Products --------------------------------------------
// For Filters
document.addEventListener("DOMContentLoaded", function () {
    var filterBtn = document.getElementById("filter-btn");
    var btnTxt = document.getElementById("btn-txt");
    var filterAngle = document.getElementById("filter-angle");
  
    $("#filterbar").collapse(false);
    var count = 0,
      count2 = 0;
    function changeBtnTxt() {
      $("#filterbar").collapse(true);
      count++;
      if (count % 2 != 0) {
        filterAngle.classList.add("fa-angle-right");
        btnTxt.innerText = "show filters";
        filterBtn.style.backgroundColor = "#36a31b";
      } else {
        filterAngle.classList.remove("fa-angle-right");
        btnTxt.innerText = "hide filters";
        filterBtn.style.backgroundColor = "#ff935d";
      }
    }
  
    // For Applying Filters
    $("#inner-box").collapse(false);
    $("#inner-box2").collapse(false);
  
    
    // For Range Sliders
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");
  
    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");
  
    var amountLeft = document.getElementById("amount-left");
    var amountRight = document.getElementById("amount-right");
  
    function setLeftValue() {
      var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
  
      _this.value = Math.min(
        parseInt(_this.value),
        parseInt(inputRight.value) - 1
      );
  
      var percent = ((_this.value - min) / (max - min)) * 100;
  
      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
      amountLeft.innerText = parseInt(percent * 100);
    }
    setLeftValue();
  
    function setRightValue() {
      var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
  
      _this.value = Math.max(
        parseInt(_this.value),
        parseInt(inputLeft.value) + 1
      );
  
      var percent = ((_this.value - min) / (max - min)) * 100;
  
      amountRight.innerText = parseInt(percent * 100);
      thumbRight.style.right = 100 - percent + "%";
      range.style.right = 100 - percent + "%";
    }
    setRightValue();
  
    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
  
    inputLeft.addEventListener("mouseover", function () {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
      thumbLeft.classList.remove("active");
    });
  
    inputRight.addEventListener("mouseover", function () {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
      thumbRight.classList.remove("active");
    });
  });
  

// Cart ----------------------------------------------
$(document).ready(function(){

    $('.radio-group .radio').click(function(){
        $('.radio').addClass('gray');
        $(this).removeClass('gray');
    });
    
    $('.plus-minus .plus').click(function(){
        var count = $(this).parent().prev().text();
        $(this).parent().prev().html(Number(count) + 1);
    });
    
    $('.plus-minus .minus').click(function(){
        var count = $(this).parent().prev().text();
        $(this).parent().prev().html(Number(count) - 1);
    });
    
    });