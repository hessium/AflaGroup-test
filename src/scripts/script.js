const itemActive = item => {
  const container = item.closest(".menu__item");
  container.addClass("active");
}

const itemDeactive = container => {
  const itemContainer = container.find(".menu__item")
  itemContainer.removeClass("active");
}

  /* document.getElementById('select').addEventListener('change', function() {
    var n = parseInt(this.value); console.log(n)
   return n;
   });
 
 */
  

$(".radio__elem").click(e =>{
  const $this = $(e.currentTarget);
  const container = $this.closest(".menu");
  const elemContainer = $this.closest(".menu__item");
  const indexSelect = elemContainer.index();
  const license = document.querySelectorAll('.radio');
  const numLisence = license[indexSelect].textContent;
  const number = Number(numLisence.match(/\d+/));
  const num = document.querySelector(".num");
  
  const select = $("select").change(function(){
  const n =$(this).val()
  const price = document.querySelectorAll(".price");
  const priceTxt = price[indexSelect].textContent;
  const priceNum = Number(priceTxt.match(/\d+/));
  const total = document.querySelector('.total__span');
  
  const mul = n * priceNum;
   
  if(total === "") {
    total.append(`$${mul}us`);
  } else {
    total.innerHTML = `$${mul}us`;
  }
  });
  
  if(num === "") {
    num.append(number);
  } else {
    num.innerHTML = number;
  }
  
  if(elemContainer.hasClass("active")) {
    itemDeactive(container);
  } else {
    itemDeactive(container);
    itemActive($this);
  }

});

