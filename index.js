let nome= "Leandro";

let idade= 14;
let acompanhadaPelosPais = true;
let temIngresso=true
let testouPositivoParaCovid=false;

// if(idade>=18){
//     console.info("Pode entrar")
// }else if(acompanhadaPelosPais==true){
//     console.info("Pode entrar")
// }else{
//     console.log("Nâo pode entrar")
// }

if((idade>=18 || acompanhadaPelosPais) && temIngresso && !testouPositivoParaCovid){
    console.info("Pode entrar")
}else{
    console.info("Não pode entrar")
}



