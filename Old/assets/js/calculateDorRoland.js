function calculateDorRoland(searchParams){

    var dor = [
        'qdor'
    ];

    var vdor = 0

//Pegar Count
    for(var key of searchParams.keys()) { 

        if(dor.some(name => name == key)){
            vdor += Number(searchParams.get(key).valueOf());
        }
        // if(document.getElementById(radio.id).checked){
        //     count += radio.value;
        // }
    }

return vdor+" Pontos" ;

}