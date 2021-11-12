function calculateScoreFAAMNFAE(searchParams){

var expected = [
        'FEsp',
    ];

    var count = 0;

//Pegar Count
    for(var key of searchParams.keys()) { 

        if(expected.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }
        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }

return count + " pontos";

}