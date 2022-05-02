
        // Exibir valor do slider nas questões
        var slider_dor = document.getElementById("range_dor");
        var output_dor = document.getElementById("value_dor");
        output_dor.innerHTML = slider_dor.value;

        slider_dor.oninput = function() {
         output_dor.innerHTML = this.value;
        }    

        //Declarar as variáveis das questões
        var form = document.querySelector('#ROLMORRIS');
        var dor = 0;
        var soma = 0;
        var frases = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24];
        var result = document.getElementById('enviar');
        result.addEventListener('click', function (event) { //Evento de click no botão para chamar a função
        event.preventDefault();
        
        // Avisar caso 'nome' esteja vazio
        var nome = document.querySelector('#nome').value;
            if(nome == ""){
                window.alert('Preencha os dados!')
                window.location.href = "#topo";
                return;
            }

        //Loop para pegar o ID de cada frase    
        for(let i = 1; i <= frases.length; i++){
            let chave_frase = 'f';
            chave_frase = chave_frase.concat(i);
            
            let frase = document.getElementById(chave_frase).checked;
            if(frase == true){ //Adicionar à soma caso a frase esteja marcada
                soma++
            }
            else{ //Caso a frase não seja marcada, identificar a DIV e não imprimir
                let print_chave = 'p';
                print_chave = print_chave.concat(i);

                let print_div = document.getElementById(print_chave);
                print_div.className = 'no-print';
            }            
        }        
       
        nome = nome.toUpperCase();
        dor = parseInt(form.dor.value);
        document.getElementById('titulo').innerHTML = `<h2>ROLAND MORRIS</h2> <br>RESULTADO ${nome}`
        document.getElementById('result').innerText = `${soma} Pontos`
        document.getElementById('resultado_print').innerText = `RESULTADO: ${soma} Pontos`
        document.getElementById('print_dor').innerHTML = `ESCALA DE DOR: ${dor} Pontos`;
        document.getElementById('result_dor').innerHTML = `ESCALA DE DOR: ${dor} Pontos`;
        document.getElementById('chamar_result').click();
        

            });
    