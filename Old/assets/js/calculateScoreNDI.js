function calculateScoreNDI(searchParams){

    var expected = [
        's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'
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
// 04
   var naq4 = [
        's4',
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

// 08
   var naq8 = [
        's8',
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

//Resultado
var count = count - subfinal;
var result = ((count / total) * 100);

        if (total === 0){
            result = 0;}

var arredondado = parseFloat(result.toFixed(1))+("%");
return arredondado;

}