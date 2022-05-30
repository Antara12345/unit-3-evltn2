// Add the coffee to local storage with key "coffee"
getdata()
async function getdata(){
  try{
    var url="https://masai-mock-api.herokuapp.com/coffee/menu"
    let res=await fetch(url)
    let people=await res.json()
    console.log(people.menu.data)

    append(people.menu.data)

  }catch(error){
    console.log(error)
  }
}
function append(data){
  data.forEach(function(el){
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
    price.style.textAlign="center"
     
    let cont=document.createElement("button")
    cont.innerText="add to bucket"
    cont.setAttribute("id","add_to_bucket")
    cont.addEventListener("click",function(){
      addcont(el)
    })
    daba.append(img,title,price,cont)
    document.getElementById("menu").append(daba)
  })
}
  var array=JSON.parse(localStorage.getItem("coffee"))||[]
  function addcont(el){
    document.getElementById("coffee_count").innerHTML=null
    var count=0
    array.push(el)
    localStorage.setItem("coffee",JSON.stringify(array))
    var count=array.length
    console.log(count)

    document.getElementById("coffee_count").append(count)
  
}
