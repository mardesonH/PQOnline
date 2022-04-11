function calculateScoreOSWESTRY(searchParams){

    var expected = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'
    ];

    var count = 0;
    var countfin = 0;
    var total = 50;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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
            total = total - 5;
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