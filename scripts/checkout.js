var id;

function main(){
    alert("Your order is accepted")
    setTimeout(function(){
        alert("Your Order is being Prepared")
    },3000)
    setTimeout(function(){
        alert("your order is being Packed")
    },8000)
    setTimeout(function(){
        alert("your order is out for delivery")
    },10000)

    setTimeout(function(){
        alert("Order delivered")
    },12000)
}