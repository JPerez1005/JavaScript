const d=document;

export default function draw(btn, selector){
    const getWinner=(selector)=>{
        const $players=d.querySelectorAll(selector),
        random=Math.floor(Math.random()*$players.lenght),
        winner=$players[random];

        console.log($players, random, winner);
        return `El Ganador es: ${winner.textContent}`;
    };

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){//si el click fue originado por la variable btn entonces
            let result=getWinner(selector);
            alert(result);
        }
    });

}