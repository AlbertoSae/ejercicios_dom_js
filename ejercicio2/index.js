//2.1 Inserta dinamicamente en un html un div vacio con javascript.

    const newDiv=document.createElement("div");
    document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

    const newDiv2=document.createElement("div");
    document.body.appendChild(newDiv2);
    const newP= document.createElement("p");
    newDiv2.appendChild(newP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

    const newDiv3=document.createElement("div");
    document.body.appendChild(newDiv3);
    for(let i=0;i<6;i++){
        const newP1= document.createElement("p");
        newDiv3.appendChild(newP1); 
    }

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
    const newPText = document.createElement("p");
    document.body.appendChild(newPText);
    const textP= document.createTextNode("Soy dinámico!");
    newPText.appendChild(textP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
    const h2Selected= document.querySelector(".fn-insert-here");
    const textH2=document.createTextNode("Wubba Lubba dub dub");
    h2Selected.appendChild(textH2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    const list= document.createElement("ul");
    apps.forEach(text=>{
        const li= document.createElement("li");
        li.textContent=text;
        list.appendChild(li);
    });

    document.body.appendChild(list);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
    const removed =document.querySelectorAll(".fn-remove-me");
    removed.forEach(element=> element.remove());
    
//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
    const newP3= document.createElement("p");

    const bodyFather=document.body;
    const secondDiv=document.querySelectorAll("div")[1];
    bodyFather.insertBefore(newP3, secondDiv);

    const textP3= document.createTextNode("Voy en medio!");
    newP3.appendChild(textP3);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
    const divs= document.querySelectorAll(".fn-insert-here");

    divs.forEach(div=>{
        const newP4= document.createElement("p");
        const textP4= document.createTextNode("Voy dentro!");
        newP4.appendChild(textP4);
        div.appendChild(newP4);
    });
    