var price=100;
var yourprice=parseInt(prompt("Mablag'ingizni kiriting: ").trim());
var text=document.createElement("p");
var texttext=document.createElement("p");

if(yourprice>=price){
  text.textContent="Marhamat olishingiz mumkin!";
  document.body.appendChild(text);
  console.log("Marhamat olishingiz mumkin!");
}
else{
  texttext.textContent="Pulingiz yetmadi Oylik chiqqanda kelarsiz";
  document.body.appendChild(texttext);
  console.log("Pulingiz yetmadi oylik chiqqanda kelarsiz!");
}