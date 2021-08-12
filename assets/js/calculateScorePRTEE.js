function calculateScorePRTEE(searchParams){

//Declarar todas as variáveis
    var q1 = [
        'q1'
    ];

    var q2 = [
        'q2'
    ];

    var q3 = [
        'q3'
    ];

    var q4 = [
        'q4'
    ];

    var q5 = [
        'q5'
    ];

    var q6 = [
        'q6'
    ];

    var q7 = [
        'q7'
    ];

    var q8 = [
        'q8'
    ];

    var q9 = [
        'q9'
    ];

    var q10 = [
        'q10'
    ];

    var q11 = [
        'q11'
    ];

    var q12 = [
        'q12'
    ];

    var q13 = [
        'q13'
    ];

    var q14 = [
        'q14'
    ];

    var q15 = [
        'q15'
    ];


    var naq1 = [
        'naq1'
    ];

    var naq2 = [
        'naq2'
    ];

    var naq3 = [
        'naq3'
    ];

    var naq4 = [
        'naq4'
    ];

    var naq5 = [
        'naq5'
    ];

    var naq6 = [
        'naq6'
    ];

    var naq7 = [
        'naq7'
    ];

    var naq8 = [
        'naq8'
    ];

    var naq9 = [
        'naq9'
    ];

    var naq10 = [
        'naq10'
    ];

    var naq11 = [
        'naq11'
    ];

    var naq12 = [
        'naq12'
    ];

    var naq13 = [
        'naq13'
    ];

      var naq14 = [
        'naq14'
    ];

      var naq15 = [
        'naq15'
    ];

    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    var count10 = 0;
    var count11 = 0;
    var count12 = 0;
    var count13 = 0;
    var count14 = 0;
    var count15 = 0;

    var soma = 0;

    var nacount = 0;
    var itens = 100;
 
//Q1 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q1.some(name => name == key)){ count1 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq1.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){count1 = 0; itens = itens - 10; } var nacount = 0; 
///

//Q2 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q2.some(name => name == key)){ count2 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq2.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count2 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q3 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q3.some(name => name == key)){ count3 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq3.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count3 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q4 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q4.some(name => name == key)){ count4 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq4.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count4 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q5 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q5.some(name => name == key)){ count5 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq5.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count5 = 0;  itens = itens - 10;} var nacount = 0; 
///

//q6 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q6.some(name => name == key)){ count6 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq6.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count6 = 0; itens = itens - 5; } var nacount = 0; 
///

//q7 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q7.some(name => name == key)){ count7 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq7.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count7 = 0; itens = itens - 5; } var nacount = 0; 
///

//q8 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q8.some(name => name == key)){ count8 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq8.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count8 = 0; itens = itens - 5; } var nacount = 0; 
///

//q9 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q9.some(name => name == key)){ count9 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq9.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count9 = 0; itens = itens - 5; } var nacount = 0; 
///

//q10 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q10.some(name => name == key)){ count10 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq10.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count10 = 0; itens = itens - 5; } var nacount = 0; 
///

//q11 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q11.some(name => name == key)){ count11 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq11.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count11 = 0; itens = itens - 5; } var nacount = 0; 
///

//q12 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q12.some(name => name == key)){ count12 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq12.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count12 = 0; itens = itens - 5; } var nacount = 0; 
///

//q13 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q13.some(name => name == key)){ count13 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq13.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count13 = 0; itens = itens - 5; } var nacount = 0; 
///

//q14 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q14.some(name => name == key)){ count14 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq14.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count14 = 0; itens = itens - 5;} var nacount = 0; 
///

//q15 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q15.some(name => name == key)){ count15 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq15.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count15 = 0; itens = itens - 5;} var nacount = 0; 
///

//Resultado
var Dor = count1 + count2 + count3 + count4 + count5;
var AtvEs = count6 + count7 + count8 + count9 + count10 + count11;
var AtvUs = count12 + count13 + count14 + count15;

var FunSub = (AtvEs + AtvUs)/2;

var soma = Dor + FunSub; 

return soma;

}

function calculateTotalPRTEE(searchParams){

//Declarar todas as variáveis
    var q1 = [
        'q1'
    ];

    var q2 = [
        'q2'
    ];

    var q3 = [
        'q3'
    ];

    var q4 = [
        'q4'
    ];

    var q5 = [
        'q5'
    ];

    var q6 = [
        'q6'
    ];

    var q7 = [
        'q7'
    ];

    var q8 = [
        'q8'
    ];

    var q9 = [
        'q9'
    ];

    var q10 = [
        'q10'
    ];

    var q11 = [
        'q11'
    ];

    var q12 = [
        'q12'
    ];

    var q13 = [
        'q13'
    ];

    var q14 = [
        'q14'
    ];

    var q15 = [
        'q15'
    ];


    var naq1 = [
        'naq1'
    ];

    var naq2 = [
        'naq2'
    ];

    var naq3 = [
        'naq3'
    ];

    var naq4 = [
        'naq4'
    ];

    var naq5 = [
        'naq5'
    ];

    var naq6 = [
        'naq6'
    ];

    var naq7 = [
        'naq7'
    ];

    var naq8 = [
        'naq8'
    ];

    var naq9 = [
        'naq9'
    ];

    var naq10 = [
        'naq10'
    ];

    var naq11 = [
        'naq11'
    ];

    var naq12 = [
        'naq12'
    ];

    var naq13 = [
        'naq13'
    ];

      var naq14 = [
        'naq14'
    ];

      var naq15 = [
        'naq15'
    ];

    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    var count10 = 0;
    var count11 = 0;
    var count12 = 0;
    var count13 = 0;
    var count14 = 0;
    var count15 = 0;

    var soma = 0;

    var nacount = 0;
    var itens = 100;
 
//Q1 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q1.some(name => name == key)){ count1 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq1.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){count1 = 0; itens = itens - 10; } var nacount = 0; 
///

//Q2 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q2.some(name => name == key)){ count2 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq2.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count2 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q3 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q3.some(name => name == key)){ count3 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq3.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count3 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q4 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q4.some(name => name == key)){ count4 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq4.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count4 = 0;  itens = itens - 10;} var nacount = 0; 
///

//Q5 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q5.some(name => name == key)){ count5 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq5.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count5 = 0;  itens = itens - 10;} var nacount = 0; 
///

//q6 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q6.some(name => name == key)){ count6 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq6.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count6 = 0; itens = itens - 5; } var nacount = 0; 
///

//q7 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q7.some(name => name == key)){ count7 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq7.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count7 = 0; itens = itens - 5; } var nacount = 0; 
///

//q8 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q8.some(name => name == key)){ count8 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq8.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count8 = 0; itens = itens - 5; } var nacount = 0; 
///

//q9 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q9.some(name => name == key)){ count9 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq9.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count9 = 0; itens = itens - 5; } var nacount = 0; 
///

//q10 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q10.some(name => name == key)){ count10 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq10.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count10 = 0; itens = itens - 5; } var nacount = 0; 
///

//q11 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q11.some(name => name == key)){ count11 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq11.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count11 = 0; itens = itens - 5; } var nacount = 0; 
///

//q12 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q12.some(name => name == key)){ count12 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq12.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count12 = 0; itens = itens - 5; } var nacount = 0; 
///

//q13 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q13.some(name => name == key)){ count13 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq13.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count13 = 0; itens = itens - 5; } var nacount = 0; 
///

//q14 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q14.some(name => name == key)){ count14 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq14.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count14 = 0; itens = itens - 5;} var nacount = 0; 
///

//q15 Pegar Valor
    for(var key of searchParams.keys()) { 

        if(q15.some(name => name == key)){ count15 +=
Number(searchParams.get(key).valueOf()); } }

//Saber se foi N/A
    for(var key of searchParams.keys()) { 

        if(naq15.some(name => name == key)){ nacount +=
Number(searchParams.get(key).valueOf()); } }

    if (nacount === 10){ count15 = 0; itens = itens - 5;} var nacount = 0; 
///

//Resultado
var Dor = count1 + count2 + count3 + count4 + count5;
var AtvEs = count6 + count7 + count8 + count9 + count10 + count11;
var AtvUs = count12 + count13 + count14 + count15;

var FunSub = (AtvEs + AtvUs)/2;

var soma = Dor + FunSub; 

return itens;

}