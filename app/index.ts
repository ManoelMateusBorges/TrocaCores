const colors: Array<string> = ["red","green", "blue", "rgba(140.210.50)"];

const elementColor: HTMLElement = document.querySelector("#bgColor")!;
const btnChangeColor: HTMLButtonElement = document.querySelector("#btnCgColor")!;
const textColor: HTMLButtonElement = document.querySelector("#textColor")!;

btnChangeColor.addEventListener("click", () => {

   

    let numberColor:number = randomGererator();

    if(numberColor == 3){
        const testeRGBA = createRGBA();
        colors[3] = testeRGBA;
    }

    console.log(numberColor);
    console.log(colors[3]);

    // console.log("Random Number", randomGererator());
    elementColor.style.background = colors[numberColor];
    textColor.textContent = colors[numberColor];

})

function randomGererator():number{
    const numRandom: number =  Math.floor( Math.random() * colors.length);
    return numRandom;
}

function createRGBA(): string{


    let rgba:string = "";
    let contador:number = 1;
    while(contador <=  3){

        for (let i = 1; i <= 3; i++) {
        
            if(i == 1){
                let RamRGBA = Math.floor(Math.random() * 3);
                rgba += RamRGBA.toString();

            }else {
                let RamRGBA = Math.floor(Math.random() * 6);
                rgba += RamRGBA.toString();


                if(rgba.length == 3){
                    rgba += ","
                }

                if(rgba.length == 7){
                    rgba += ","
                }

            }


            
        }
        
        contador++;
    }

    rgba = `rgb(${rgba})`
    return rgba;

}

// 1) clicar no btn para gerar uma cor == ok
// 2) gerar um numero de 1 a 3 == ok
// 3) verificar se esse número é 3 == ok
// 4) se número for 3 criar uma lógica para ele == OK

// Criar RGBA
// 1) encontrar os parenteses
// 2) modificar os numeros dentro dos parenteses
// 3) primeiro numero deve ser menor ou igual a 2
// 4) os dois seguintes devem ser menos ou igual a 5
// 5) repetir o mesmo código para red, green e blue