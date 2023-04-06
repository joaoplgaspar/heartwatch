let displayObj;
let displayPub;
let displayEquip;


let objetivo = document.querySelector('#objetivo');
let publico = document.querySelector('#publico');
let equipamento = document.querySelector('#equipamento');


function infoDisplay(number){
    const largura = window.screen.width;

    if(largura<=1024){
        displayObj = document.querySelector('.info-objetivo');
        displayPub = document.querySelector('.info-publico');
        displayEquip = document.querySelector('.info-equipamento');
    } else {
        displayObj = document.querySelector('.info-objetivoD');
        displayPub = document.querySelector('.info-publicoD');
        displayEquip = document.querySelector('.info-equipamentoD');
    }

    displayObj.style.display = 'none';
    displayPub.style.display = 'none';
    displayEquip.style.display = 'none';

    if(number == 1){
        displayObj.style.display = 'flex';

        objetivo.style.background = '#FFF';
        objetivo.style.color = '#000';

        publico.style.background = '#1F0144';
        publico.style.color = '#FFF';

        equipamento.style.background = '#1F0144';
        equipamento.style.color = '#FFF';

    } else if (number == 2){
        displayPub.style.display = 'flex';

        publico.style.background = '#FFF';
        publico.style.color = '#000';

        objetivo.style.background = '#1F0144';
        objetivo.style.color = '#FFF';

        equipamento.style.background = '#1F0144';
        equipamento.style.color = '#FFF';

    } else {
        displayEquip.style.display = 'flex';

        equipamento.style.background = '#FFF';
        equipamento.style.color = '#000';

        objetivo.style.background = '#1F0144';
        objetivo.style.color = '#FFF';

        publico.style.background = '#1F0144';
        publico.style.color = '#FFF';
    } 
}

function calcularBatimento(){
    const condicao = document.querySelector("#select").value;
    const idade = document.querySelector("#idade").value;

    document.querySelector(".resultado h3").innerHTML = `O resultado para a idade ${idade} anos e a condição: ${condicao}`;
    document.querySelector(".resultado .text-adc").innerHTML = ``;


    if(condicao == 'Homem em repouso e atividade'){
        if(idade >= 8 && idade<= 17){
            document.querySelector(".resultado p").innerHTML = `<strong>60</strong> a <strong>100</strong> bpm em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 18 && idade<= 25){
            document.querySelector(".resultado p").innerHTML = `<strong>56</strong> a  <strong>82bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 26 && idade<= 55){
            document.querySelector(".resultado p").innerHTML = `<strong>55</strong> a <strong>83bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 56 && idade<= 65){
            document.querySelector(".resultado p").innerHTML = `<strong>57</strong> a <strong>82bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 66){
            document.querySelector(".resultado p").innerHTML = `<strong>56</strong> a <strong>80bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        }
    } else if(condicao == 'Mulher em repouso e atividade'){
        if(idade >= 8 && idade<= 17){
            document.querySelector(".resultado p").innerHTML = `<strong>60</strong> a <strong>100</strong> bpm em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 18 && idade<= 25){
            document.querySelector(".resultado p").innerHTML = `<strong>61</strong> a  <strong>85bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 26 && idade<= 55){
            document.querySelector(".resultado p").innerHTML = `<strong>60</strong> a <strong>85bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 56 && idade<= 65){
            document.querySelector(".resultado p").innerHTML = `<strong>60</strong> a <strong>84bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        } else if(idade >= 66){
            document.querySelector(".resultado p").innerHTML = `<strong>60</strong> a <strong>84bpm</strong> em repouso e <strong>${220 - idade}</strong> em atividade no máximo`;
        }
    } else if(condicao == 'ciclismo'){
        document.querySelector(".resultado p").innerHTML = `Repouso <strong>60</strong> e maximo de <strong>${220 - idade}bpm</strong>.`;

        document.querySelector(".resultado .text-adc").innerHTML = `Um atleta bem condicionado pode ter entre <strong>40 até 60bpm</strong> em repouso.`;
    } else if(condicao == 'corrida'){
        document.querySelector(".resultado p").innerHTML = `Repouso <strong>60</strong> e maximo de <strong>${220 - idade}bpm</strong>.`;

        document.querySelector(".resultado .text-adc").innerHTML = `Um atleta bem condicionado pode ter entre <strong>40 até 60bpm</strong> em repouso.`;
    } else if(condicao == 'natacao'){
        document.querySelector(".resultado p").innerHTML = `Repouso <strong>55</strong> e maximo de <strong>${220 - idade}bpm</strong>.`;

        document.querySelector(".resultado .text-adc").innerHTML = `Um atleta bem condicionado pode ter entre <strong>40 até 60bpm</strong> em repouso.`;
    } else if(condicao == 'outros exercicios'){
        document.querySelector(".resultado p").innerHTML = `Entre <strong>75</strong> e maximo de <strong>${220 - idade}bpm</strong>.`;

        document.querySelector(".resultado .text-adc").innerHTML = `Um atleta bem condicionado pode ter entre <strong>40 até 60bpm</strong> em repouso.`;
    } else if(condicao == 'infarto'){
        document.querySelector(".resultado p").innerHTML = `Frequência cardíaca <strong>+180bpm</strong> na idade de ${idade} anos.`;
    } else if(condicao == 'obesidade'){
        document.querySelector(".resultado p").innerHTML = `Frequência cardíaca de no máximo <strong>${220 - idade}bpm</strong> na idade de ${idade} anos.`;
        document.querySelector(".resultado .text-adc").innerHTML = `Além desse bpm pode ser considerado infarto, taquicardia, entre outros.`;
    } else if(condicao == 'taquicardia'){
        document.querySelector(".resultado p").innerHTML = `Caracterizada pela frequência cardíaca em repouso superior a <strong>100bpm</strong> na idade de ${idade} anos.`;
    } else if(condicao == 'taquicardia sinusal'){
        document.querySelector(".resultado p").innerHTML = `Caracterizada pela frequência cardíaca em repouso entre a <strong>100 e 140bpm</strong> na idade de ${idade} anos.`;
    } else if(condicao == 'bradicardia'){
        document.querySelector(".resultado p").innerHTML = `Caracterizada pela frequência cardíaca em repouso abaixo de <strong>60bpm</strong> na idade de ${idade} anos.`;
    }
}


