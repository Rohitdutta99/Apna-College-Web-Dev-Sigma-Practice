let h1 = document.querySelector('h1');
let margintop = 0;
let marginbottom = 0;
let marginleft = 0;
let marginright = 0;

document.addEventListener("keydown", (e) =>{
    
    if (e.code == "ArrowUp"){
        marginbottom += 10;
        margintop -= 10;
        
    }
    if (e.code == "ArrowDown"){
        margintop += 10;
        marginbottom -= 10;
    }
    if (e.code == "ArrowRight"){
        marginleft += 10;
        marginright -= 10;
        
    }
    if (e.code == "ArrowLeft"){
        marginright += 10;
        marginleft -= 10;
        
    }

    h1.style.marginBottom = `${marginbottom}px`;
    h1.style.marginTop = `${margintop}px`;
    h1.style.marginLeft = `${marginleft}px`;
    h1.style.marginRight = `${marginright}px`;

})