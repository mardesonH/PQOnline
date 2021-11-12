function calculateScoreDashTrab(searchParams){

    var checar = [
    'NAtrab'
    ];

    var soma = [
        'Trab1', 'Trab2', 'Trab3', 'Trab4',
    ];

    var count = 0;
    var nacount = 0;
   
for(var key of searchParams.keys()) { 

        if(soma.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }
    }

for(var key of searchParams.keys()) { 

        if(checar.some(name => name == key)){
            nacount += Number(searchParams.get(key).valueOf());
        }
    }

//Resultado
var result = (((count / 4) - 1) * 25);
var resposta = parseFloat(result.toFixed(0));

    if (nacount === 10){
        resposta = "Não respondido";
    }

    if (resposta < 0){
        resposta = "Não respondido";
    }

//Condições
return resposta;

}