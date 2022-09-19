const automobiliuBrandai = ["BMW", "VOLVO", "VW", "RENAULT"];
let ulElementas = document.createElement('ul');

for (let i = 0; i < automobiliuBrandai.length; i++){
    const liElementas = document.createElement('li');
    liElementas.textContent = automobiliuBrandai[i];
    ulElementas.append(liElementas);
}

document.body.append(ulElementas);

// let divElementas = document.createElement('div');

// divElementas.textContent = "Matas";
// divElementas.style.color = "red";
// divElementas.style.background = "blue";
// divElementas.style.borderRadius = "20px";


// document.body.append(divElementas);

// let listElement = document.createElement('li');
// listElement.textContent = "NaujasElementas"

// document.getElementById('2').querySelectorAll('li')[4].insertAdjacentHTML("afterend", "<li style='color:red;'>Tekstas</li>");


//document.body.append(h1elementas);
//.insertAdjacentElement("afterend", h1elementas);
//let elementsArray = [];

// for (let i = 0; i < 10; i++){
//     //elementsArray[i] = h2elementas;
//     let h2elementas = document.querySelector('div').cloneNode(true);
//     document.querySelector('div').after(h2elementas);
// }

