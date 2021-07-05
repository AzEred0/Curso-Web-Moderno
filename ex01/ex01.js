function calcular(){

    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let res = document.querySelector('div#res')
    let res1 = document.querySelector('div#res1')
    
    if(num1.value.length == 0 && num2.value.length== 0){
        window.alert('Faltam dados')
    }else{
        
        let n1 = Number(num1.value)
        let n2 = Number(num2.value) 
        
        soma = n1 +  n2 
        sub  = n1 -  n2
        mult = n1 *  n2
        div  = n1 /  n2
        
        div1 = n1 %  n2
        pot1 = n1 ** n2
        
        div2 = n2 %  n1
        pot2 = n2 ** n1
        
        num1.value = ''
        num1.focus()
        num2.value = ''
        num2.focus()

        var fatorial = n1;
        var resultado = fatorial;
        for (var i = 1; i < fatorial; i++) {
            resultado *= i;
        }
        
        var fatorial = n2;
        var resultado2 = fatorial;
        for (var i = 1; i < fatorial; i++) {
            resultado2 *= i;
        }
    
    }
    
 

    
    res.innerHTML  = `<strong>Seus resultados são:</strong>`
    res.innerHTML += `<p> Soma = ${soma} </p>`
    res.innerHTML += `<p> Subtração = ${sub} </p>`
    res.innerHTML += `<p> Multiplicação = ${mult} </p>`
    res.innerHTML += `<p> Divisão = ${div} </p>` 

    res1.innerHTML  = '<strong>Seus resultados do primeiro número são:</strong>'
    res1.innerHTML += `<p> Resto da divisão inteira = ${div1} </p>`
    res1.innerHTML += `<p> Potência = ${pot1} </p>`
    res1.innerHTML += `<p> Fatorial = ${resultado} </p>`
    
    res2.innerHTML  = '<strong>Seus resultados do segundo número são:</strong>'
    res2.innerHTML += `<p> Resto da divisão inteira = ${div2} </p>`
    res2.innerHTML += `<p> Potência = ${pot2} </p>`
    res2.innerHTML += `<p> Fatorial = ${resultado2} </p>`
}

