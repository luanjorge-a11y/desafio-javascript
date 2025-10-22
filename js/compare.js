

let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}


function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                el.checked = false;
                alert("Você só pode comparar 2 veículos por vez!");
                return;
            }
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }

        } else {
            const index = GetCarArrPosition(carArr, carClass);
            if (index !== -1) {
                carArr.splice(index, 1);
            }
        }

        botaoComparar();

    } else {
        throw "You need set a Car Class";
    }
}

function botaoComparar() {
    const compareBtn = document.querySelector('button[onclick="ShowCompare()"]');

    if(carArr.length === 2){
        compareBtn.disabled = false;
        compareBtn.style.opacity = 1;
        compareBtn.style.cursor = "pointer";
    }else{
        compareBtn.disabled = true;
        compareBtn.style.opacity = 0.5;
        compareBtn.style.cursor = "not-allowed";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
    document.body.classList.add("compare-open");
}   

function HideCompare() {
    document.getElementById("compare").style.display = "none";
    document.body.classList.remove("compare-open");
}

function UpdateCompareTable() {

    for(let i = 0; i < carArr.length; i++){
        const car = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="100">`;

        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    botaoComparar();
})
