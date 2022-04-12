var price=100;
var yourprice=parseInt(prompt("Mablag'ingizni kiriting: ").trim());
var text=document.createElement("p");
var texttext=document.createElement("p");

if(yourprice>=price){
  text.textContent="Marhamat olishingiz mumkin!";
  console.log("Marhamat olishingiz mumkin!");
}
else{
  texttext.textContent="Pulingiz yetmadi Oylik chiqqanda kelarsiz";
  console.log("Pulingiz yetmadi Oylik chiqqanda kelarsiz!");
}