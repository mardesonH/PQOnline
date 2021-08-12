function calculateScoreACL(searchParams){
    
    //2, 3, 6, 7, 9 e 10.
    var q2i = ['q2'];
    var q3i = ['q3'];
    var q6i = ['q6'];
    var q7i = ['q7'];
    var q9i = ['q9'];
    var q10i = ['q10'];
    var expected = [
        'q1', 'q4', 'q5', 'q8', 'q11', 'q12'];

    var invert = 0;
    var count = 0;
    var final = 0;
    var result = 0;

// Inverter Segunda Questão
    for(var key of searchParams.keys()) { 

        if(q2i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

// Inverter Terceira Questão
    for(var key of searchParams.keys()) { 

        if(q3i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

// Inverter Sexta Questão
    for(var key of searchParams.keys()) { 

        if(q6i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

// Inverter Sétima Questão
    for(var key of searchParams.keys()) { 

        if(q7i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

// Inverter Nona Questão
    for(var key of searchParams.keys()) { 

        if(q9i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

// Inverter Décima Questão
    for(var key of searchParams.keys()) { 

        if(q10i.some(name => name == key)){
            invert += Number(searchParams.get(key).valueOf());
        }
    }
    final = final + (10 - invert)

//Zerar var invert
    var invert = 0;

    for(var key of searchParams.keys()) { 

        if(expected.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }


        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }

    var result = ((count + final)*10) /12;
    var arredondado = parseFloat(result.toFixed(1))+("%");
    return arredondado;

}