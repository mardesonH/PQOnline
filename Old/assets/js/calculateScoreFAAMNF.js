function calculateScoreFAAMNF(searchParams){

var expected = [
        'FA',
    ];

    var count = 0;
    var result = 0;

//Pegar Count
    for(var key of searchParams.keys()) { 

        if(expected.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }
        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }

    if (count === 1){
        var result = "Normal";
    };

        if (count === 2){
        var result = "Quase normal";
    };

        if (count === 3){
        var result = "Anormal";
    };

        if (count === 4){
        var result = "Extremamente anormal";
    };

return result;

}