function calculateScoreTAMPA(searchParams){

    var soma = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
        'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17'
    ];

    var count = 0;

for(var key of searchParams.keys()) { 

        if(soma.some(name => name == key)){
            count += Number(searchParams.get(key).valueOf());
        }

    }

return count + " /68";

}