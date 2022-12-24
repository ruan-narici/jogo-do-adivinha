//Hits
const hit1 = document.querySelector('.hit-1');
const hit2 = document.querySelector('.hit-2');
const hit3 = document.querySelector('.hit-3');

//Lifes
const life1 = document.querySelector('.life-1');
const life2 = document.querySelector('.life-2');
const life3 = document.querySelector('.life-3');
const lifes = [life1,life2,life3];

//Buttons-player
const buttons_player = document.querySelectorAll('.card-player');

//Buttons-computer
const buttons_computer = document.querySelectorAll('.card-computer');


//Functions
//Select-Card-Player
selectCard = () => {
    //Brain-CPU
    let numberRandom = Math.floor(Math.random() * (9 - 1 +1) + 1);
    //let numberRandom = 5;

    //Life-of-player
    let lifePlayer = 0;
    
    //Loop
    for (let i = 0; i < buttons_player.length; i++) {
        buttons_player[i].addEventListener('click', () => {
                //Win
                if (buttons_player[i].innerHTML == numberRandom) {
                    buttons_computer[numberRandom-1].innerHTML = `${numberRandom}`;
                    buttons_computer[numberRandom-1].style.background = '#00714F';
                    buttons_player[i].style.background = '#BC1C33';
                }
                //Gain
                else if (buttons_computer[numberRandom-1].innerHTML == numberRandom &&
                    lifePlayer < 3) {
                    alert('Você já ganhou.\nRecarregue a página para tentar novamente.')
                }
                //Loss
                else {
                    if (lifePlayer < 3) {  
                        lifePlayer++;
                        lifes[lifePlayer-1].classList.add('hide');
                    }
                    else {
                        buttons_computer[numberRandom-1].innerHTML = `${numberRandom}`;
                        buttons_computer[numberRandom-1].style.background = '#00714F';
                        alert(`Suas vidas acabaram!\nRecarregue a página e tente novamente.\nO número correto é: ${numberRandom}.`);
                    }
                }
                //Loss
                if (lifePlayer == 3) {
                    buttons_computer[numberRandom-1].innerHTML = `${numberRandom}`;
                    buttons_computer[numberRandom-1].style.background = '#00714F';
                    alert(`Suas vidas acabaram!\nRecarregue a página e tente novamente.\nO número correto é: ${numberRandom}.`);
                }
        })
    }
}

//Execute
selectCard();
