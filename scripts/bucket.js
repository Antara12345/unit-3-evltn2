// On clicking remove button the item should be removed from DOM as well as localstorage.
var array=JSON.parse(localStorage.getItem("coffee"))||[]
var cost=0

append(array)

function append(data)
{
  document.getElementById("bucket").innerHTML=null

  data.forEach(function(el,index){
    document.querySelector("#total_amount").innerHTML=null
    let daba=document.createElement("div")
  daba.setAttribute("id","small")

  let img=document.createElement("img")
  img.src=el.image
  img.setAttribute("id","picture")

  let title=document.createElement("p")
  title.innerText=el.title
  title.style.textAlign="center"

  let price=document.createElement("p")
  price.innerText=el.price
  cost=cost+(+el.price)
  price.style.textAlign="center"
   
  let cont=document.createElement("button")
  cont.innerText="Remove Coffee"
  cont.setAttribute("id","remove_coffee")
  cont.addEventListener("click",function(){
    delrow(el,index)
  })
  daba.append(img,title,price,cont)
  document.querySelector("#bucket").append(daba)
  document.querySelector("#total_amount").append(cost)
})
}
function delrow(el,index)
{
  array.splice(index,1)
  localStorage.setItem("coffee",JSON.stringify(array))
  window.location.reload()
}
