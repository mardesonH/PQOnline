function calculateScorePHQ9(searchParams){

    var soma = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'
    ];

    var count = 0;
    var diag = 0;

for(var key of searchParams.keys()) { 

        if(soma.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }

    }

if (count < 5) {

	diag = " (Sem depressão)"
}

if (count < 10 && count > 4) {

	diag = " (Transtorno depressivo leve)"
}

if (count < 15 && count > 9) {

	diag = " (Transtorno depressivo moderado)"
}

if (count < 20 && count > 14) {

	diag = " (Transtorno depressivo moderadamente grave)"
}

if (count >= 20) {

	diag = " (Transtorno depressivo grave)"
}



return count + diag;

}