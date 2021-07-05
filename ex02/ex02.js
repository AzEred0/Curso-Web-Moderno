function verificar(){

    let ladoA = document.getElementById('ladoA')
    let ladoB = document.getElementById('ladoB')
    let ladoC = document.getElementById('ladoC')
    let res = document.getElementById('res')
    

    
    if(ladoA.value.length == 0 || ladoB.value.length == 0 || ladoC.value.length == 0){
        window.alert('[ERRO]Dados Insuficientes')
    }else{
        let A = Number(ladoA.value)
        let B = Number(ladoB.value)
        let C = Number(ladoC.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        res.innerHTML = '' 
            if(A==B && C==A){
                
                img.setAttribute('src','equilátero.png')
                            
            }else if(A==B || B==C || C==A){
                
                img.setAttribute('src','isósceles.png')
                            
            }else{
                
                img.setAttribute('src','escaleno.png')
                            
            }
           
            res.appendChild(img)
            
    }

        
    

        
    

   
    


}