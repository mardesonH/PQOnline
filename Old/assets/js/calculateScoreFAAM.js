function calculateScoreFAAM(searchParams){

var expected = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19',
         'q20', 'q21', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
    ];

    var count = 0;
    var countfin = 0;
    var total = 116;
    var subfinal = 0;

//Pegar Count
    for(var key of searchParams.keys()) { 

        if(expected.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }
        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }

// Saber quantas questões marcaram N/A
// 01
   var naq1 = [
        'q1',
    ];

    for(var key of searchParams.keys()) { 

        if(naq1.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 02
   var naq2 = [
        'q2',
    ];

    for(var key of searchParams.keys()) { 

        if(naq2.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 03
   var naq3 = [
        'q3',
    ];

    for(var key of searchParams.keys()) { 

        if(naq3.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 04
   var naq4 = [
        'q4',
    ];

    for(var key of searchParams.keys()) { 

        if(naq4.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 05
   var naq5 = [
        'q5',
    ];

    for(var key of searchParams.keys()) { 

        if(naq5.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 06
   var naq6 = [
        'q6',
    ];

    for(var key of searchParams.keys()) { 

        if(naq6.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 07
   var naq7 = [
        'q7',
    ];

    for(var key of searchParams.keys()) { 

        if(naq7.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 08
   var naq8 = [
        'q8',
    ];

    for(var key of searchParams.keys()) { 

        if(naq8.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 09
   var naq9 = [
        'q9',
    ];

    for(var key of searchParams.keys()) { 

        if(naq9.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 10
   var naq10 = [
        'q10',
    ];

    for(var key of searchParams.keys()) { 

        if(naq10.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// 11
   var naq11 = [
        'q11',
    ];

    for(var key of searchParams.keys()) { 

        if(naq11.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q12
   var naq12 = [
        'q12',
    ];

    for(var key of searchParams.keys()) { 

        if(naq12.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q13
   var naq13 = [
        'q13',
    ];

    for(var key of searchParams.keys()) { 

        if(naq13.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q14
   var naq14 = [
        'q14',
    ];

    for(var key of searchParams.keys()) { 

        if(naq14.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q15
   var naq15 = [
        'q15',
    ];

    for(var key of searchParams.keys()) { 

        if(naq15.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q16
   var naq16 = [
        'q16',
    ];

    for(var key of searchParams.keys()) { 

        if(naq16.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q17
   var naq17 = [
        'q17',
    ];

    for(var key of searchParams.keys()) { 

        if(naq17.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q18
   var naq18 = [
        'q18',
    ];

    for(var key of searchParams.keys()) { 

        if(naq18.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q19
   var naq19 = [
        'q19',
    ];

    for(var key of searchParams.keys()) { 

        if(naq19.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q20
   var naq20 = [
        'q20',
    ];

    for(var key of searchParams.keys()) { 

        if(naq20.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// q21
   var naq21 = [
        'q21',
    ];

    for(var key of searchParams.keys()) { 

        if(naq21.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d1
   var nad1 = [
        'd1',
    ];

    for(var key of searchParams.keys()) { 

        if(nad1.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d2
   var nad2 = [
        'd2',
    ];

    for(var key of searchParams.keys()) { 

        if(nad2.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d3
   var nad3 = [
        'd3',
    ];

    for(var key of searchParams.keys()) { 

        if(nad3.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d4
   var nad4 = [
        'd4',
    ];

    for(var key of searchParams.keys()) { 

        if(nad4.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d5
   var nad5 = [
        'd5',
    ];

    for(var key of searchParams.keys()) { 

        if(nad5.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d6
   var nad6 = [
        'd6',
    ];

    for(var key of searchParams.keys()) { 

        if(nad6.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d7
   var nad7 = [
        'd7',
    ];

    for(var key of searchParams.keys()) { 

        if(nad7.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

// d8
   var nad8 = [
        'd8',
    ];

    for(var key of searchParams.keys()) { 

        if(nad8.some(name => name == key)){
            countfin += Number(searchParams.get(key).valueOf());
        }
    }

        if (countfin === 500){
            total = total - 4;
            subfinal = subfinal + 500;}

var countfin = 0;

//Resultado
var count = count - subfinal;
var result = ((count / total) * 100);

        if (total === 0){
            result = 0;}

var arredondado = parseFloat(result.toFixed(1))+("%");
return arredondado;

}