// let nome= "José";
// let idade= 14;
// let acompanhadaPelosPais = true;
// let temIngresso=true
// let testouPositivoParaCovid=false;


// if((idade>=18 || acompanhadaPelosPais) && temIngresso && !testouPositivoParaCovid){
//     console.info("Pode entrar")
// }else{
//     console.info("Não pode entrar")
// }



const btn = document.querySelector("#send")
const resp = document.querySelector("#textReturn");


 btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const name=document.querySelector("#inName");
    const age=document.querySelector("#inAge");
    const compParents= document.querySelector("#checkParents");
    const ticket=document.querySelector("#checkTicket");
    const testCovid= document.querySelector("#checkTestCovid")

    const valueName=name.value;
    const valueAge=age.value;
    const valueParents= compParents.checked;
    const valueTicket=ticket.checked;
    const valueTestCovid= testCovid.checked;

    if((valueAge>=18 || valueParents ) && valueTicket && !valueTestCovid ){
        console.log("Pode Entrar");
        resp.innerText = "Pode Entrar!  "
        
    }else{
        console.log("Não pode entrar!");
        resp.innerText = "Não Pode Entrar!"
    }



    console.log(valueAge);
    console.log(valueName);
    console.log(valueParents);
    console.log(valueTicket);
    console.log(valueTestCovid);
    

   
 })





