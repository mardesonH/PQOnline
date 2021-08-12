function calculateScoreVISAP(searchParams){


    var expected = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
    ];

    var count = 0;

    for(var key of searchParams.keys()) { 

        if(expected.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }
        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }


    return count;

}