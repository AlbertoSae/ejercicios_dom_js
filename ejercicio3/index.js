//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

    const ul= document.createElement("ul");
    document.body.appendChild(ul);

    countries.forEach(country=>{
        const li=document.createElement("li");
        li.textContent=country;
        ul.appendChild(li);
    });
            //imprime por consola cada country
    for(let i=0; i<countries.length;i++){
        console.log(countries[i]);
    } 


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
    const removeIt= document.querySelector(".fn-remove-me");
    removeIt.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
    cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

    const printHere= document.querySelector('[data-function="printHere"]');
    const ul2= document.createElement("ul");
    printHere.appendChild(ul2);

    cars.forEach(car=> {
        const li2=document.createElement("li");
        li2.textContent=car;
        ul2.appendChild(li2);
    });

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
    const countries1 = [
	    {title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	    {title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	    {title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	    {title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	    {title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    countries1.forEach(country1=>{
        const divs=document.createElement("div");
        document.body.appendChild(divs);

        const h4= document.createElement("h4");
        divs.appendChild(h4);
        const textH4= document.createTextNode(country1.title);
        h4.appendChild(textH4);

        const img= document.createElement("img");
        img.src=country1.imgUrl;
        img.alt=country1.title;
        divs.appendChild(img);


        //ejercicio 1.6 **********************************************************
        const deleteButton = document.createElement('button');
        divs.appendChild(deleteButton);
        deleteButton.textContent = 'Eliminar este div';
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";

        deleteButton.addEventListener('click', () => {
            divs.remove(); 
        });

    });

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
    const button= document.createElement("button");
    document.body.appendChild(button);
    button.textContent="Eliminar";

    button.addEventListener('click',()=>{
        const removeThis=document.querySelectorAll("img");
        removeThis.forEach(img=>img.remove());
    });


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
  


