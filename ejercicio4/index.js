//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
    const button=document.createElement("button");
    document.body.appendChild(button);
    button.id="btnToClick";
    button.textContent="Pulsame";
    button.style.backgroundColor="red";
    button.addEventListener('click', (event) => {
        console.log("Click detectado", event);
    });

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
    const inputFocus=document.querySelector(".focus");
    inputFocus.addEventListener("focus", (event)=>{
        console.log("valor de input:", event.target.value);
    });

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
    const input=document.querySelector(".input");
    input.addEventListener("input", (event)=>{
        console.log("valor de input:", event.target.value);
    });

//No aparece numero de ejercicio, pero aparece a continuación
    //Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

    const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
    ];
    const ulList=document.createElement("ul");
    document.body.appendChild(ulList);
    const liElement=document.createElement("li");
    ulList.appendChild(liElement);

    albums.forEach(album=>{
        const liElement=document.createElement("li");
        liElement.textContent=album;
        ulList.appendChild(liElement);
    });
