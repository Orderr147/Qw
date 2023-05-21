var pro_container=document.getElementsByClassName("pro-container")[0];
var product=
`<div class="pro">
<img src="./Fff.jpg" alt="product img" />
<div class="des">
  <h5>SUN-DVTH-002</h5>
  <div class="star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
  </div>
  <h4>25 EGP</h4>
</div>
<a href="#"><i class="bi bi-cart fs-3"></i></i></a>
</div>`
//create number of cards with default img
pro_container.innerHTML=product.repeat(8);
//set card images
var pro=document.getElementsByClassName("pro");
// console.log(pro[0].childNodes[1])
pro[0].childNodes[1].setAttribute("src","./Rgb.jpg")
pro[1].childNodes[1].setAttribute("src","./Ctctvv.jpg")
pro[2].childNodes[1].setAttribute("src","./R.jpg")
pro[3].childNodes[1].setAttribute("src","./Dcf.jpg")
pro[4].childNodes[1].setAttribute("src","./Nn.jpg")
pro[5].childNodes[1].setAttribute("src","./Rr.jpg")
pro[6].childNodes[1].setAttribute("src","./Hu.jpg")
pro[7].childNodes[1].setAttribute("src","./Dffv.jpg")

// var pro=document.getElementsByClassName("pro")
