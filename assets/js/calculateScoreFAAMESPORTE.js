function calculateScoreFAAMESPORTE(searchParams){

var expected = [
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
    ];

    var count = 0;
    var countfin = 0;
    var total = 32;
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