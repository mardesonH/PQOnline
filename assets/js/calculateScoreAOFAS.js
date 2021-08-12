function calculateScoreAOFAS(searchParams){

    var expected = [
        'dor', 'fun', 'dist', 'cam', 'anor', 'mob-sag', 'mob-retro', 'esta', 'alin'
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