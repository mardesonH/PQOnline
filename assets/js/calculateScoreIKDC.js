function calculateScoreIKDC(searchParams){
    

    var expected = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
        'q9a', 'q9b', 'q9c', 'q9d', 'q9e', 'q9f', 'q9g', 'q9h', 'q9i',
        'q11'];


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


    var result = (count / 87) * 100;
    var arredondado = parseFloat(result.toFixed(1))+("%");
    return arredondado;

}