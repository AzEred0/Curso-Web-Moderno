function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }


 function calcular(){

    let montante = document.getElementById('txt1')
    let aplicação = document.getElementById('txt2')
    let tempo = document.getElementById('meses')
    let perps = document.getElementById('perps')
    let res = document.getElementById('res')
    
    if(montante.value.length == 0 || aplicação.value.length == 0 || tempo.value.length == 0 || perps.value.length == 0){
        window.alert('[ERRO]Não é possível calcular pois faltam dados')
    }else{
        let M = Number(montante.value)
        let Aply = Number(aplicação.value)
        let tmp = Number(tempo.value)
        let taxa = Number(perps.value)/100

        let total = M

        for(let i = 1 ; i<= tmp ;i++){
            
            total += total*taxa + Aply
            
        }

        res.innerHTML = (`${total}`)
    }
    
   
 }