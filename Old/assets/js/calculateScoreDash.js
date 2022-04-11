function calculateScoreDash(searchParams){

    var soma = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
        'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20',
        'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30',
    ];

    var count = 0;

for(var key of searchParams.keys()) { 

        if(soma.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }

    }

//Resultado
var result = (((count / 30) - 1) * 25);
var arredondado = parseFloat(result.toFixed(0));

return arredondado;

}