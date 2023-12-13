// hämta h1 elementet &amp; spara i variabeln rubrik
let rubrik = document.querySelector("h1");
// Ändra texten i h1 elementet till Javascript it is
rubrik.textContent= "Javascript it is";

// Hämtar 1:a p elementet och sparar det i p variabeln
let p = document.querySelector("p");
// Ändra på p-elementets text
p.textContent="Text has changed du to javscript";
// hämta elementet med klassen text
let text = document.querySelector(".text");
// rita ut en gräns runt elementet
text.style.border="4px solid black";
// sätta margin-left och margin-right till 10vh
text.style.marginLeft="10vw";
text.style.marginRight="10vw";

//Pröva att ändra andra css egenskaper font, font-storlek och text-align t.ex.

//Lägga till klassen xtra rubrik-elementet (h1)
rubrik.classList.add('xtra');

// Ändra på body bakgrundsfärg
document.body.style.backgroundColor= "#e9dd99";

// Hämta ul elementet (listan)
let listan = document.querySelector("ul");
// Skapa li element
let li_1 = document.createElement("li");
// Lägg in text i li-elementet
li_1.textContent="Lära javscript syntax";
// lägg in li-elementet i ul element
listan.appendChild(li_1);
// skapa en ny punkt med text &amp; lägga in den i listan
let li_2 = document.createElement("li");
li_2.textContent="Lära document objektet";
listan.appendChild(li_2);
// Ändra på ul layout till flex column och centrera den.
listan.style.display="flex";
listan.style.flexDirection="column";
listan.style.alignItems="center";
// hämta alla li element och spara dess i en array.
let li_array = document.querySelectorAll("li");

// loopa igenom arrayen och ändra text-färg på li-element
for (let i=0; i < li_array.length; i++)
{
    li_array[i].style.fontWeight="bold";
}
