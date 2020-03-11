function odliczanie()



{

    let dzisiaj = new Date();

    
    
   
    
    

    let godzina = dzisiaj.getHours();
    if(godzina<10) godzina="0"+godzina;
    let minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta="0"+ minuta;
    let sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda="0"+sekunda;
    document.getElementById("zegar").innerHTML = +godzina+":"+minuta+":"+sekunda;
    setTimeout("odliczanie()",1000);
}




// let dzis = new Date();
// let godzina = dzis.getHours();
// if (godzina>10){
//     wiadomosc = 'elo kurwa raz 2 trzy';
// }

// // document.write(wiadomosc);
// let element=document.getElementById("zegar")
// element.innerHTML=wiadomosc;
// console.log(element);

