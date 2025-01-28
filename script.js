let user_score=0;
let comp_score=0;

const choices = document.querySelectorAll('.choice');
const msg=document.querySelector('#msg')

const userScorePara=document.querySelector('#user');
const compScorePara=document.querySelector('#comp');


const generateComputerChoice=()=>{
    const options=["rock","paper","scissors"]
    //to generate random options
    const indexes= Math.floor(Math.random()*3)
    return options[indexes]
}

const drawFunction=()=>{
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor='aqua';
    msg.style.color="darkblue";
}
const showWinner=(win,user_option,comp_option)=>{
    if (win){
        msg.innerText=`You Won! ${user_option} beats ${comp_option}`;
        msg.style.backgroundColor='gold';
        msg.style.color='black';
        user_score++;
        userScorePara.innerText=user_score;

    }
    else{
        msg.innerText=`You lose! ${comp_option} beats ${user_option}`;
        msg.style.backgroundColor='lightpink';
        msg.style.color='hotpink';
        comp_score++;
        compScorePara.innerText=comp_score
    }
}

const playGame=(user_option)=>{
    const comp_option=generateComputerChoice();
    if (user_option === comp_option) {
            drawFunction()
    }
    else {
        let user_win=true;
        if(user_option==='rock'){
            user_win=comp_option==='paper'?false:true;
        }
        else if(user_option==='paper'){
            user_win=comp_option==='scissors'?false:true
        }
        else{
            user_win=comp_option==='paper'?true:false
        }
        showWinner(user_win,user_option,comp_option);
    }
}

choices.forEach((choicee)=>{
    choicee.addEventListener("click",()=>{
        const choiceId=choicee.getAttribute('id');
        playGame(choiceId);
    })
})
