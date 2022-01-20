var player1_name = localStorage.getItem("Player1_Name");
var player2_name = localStorage.getItem("Player2_Name");
var p1_score = 0;
var p2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send()
{
    getNumber1 = document.getElementById("num1_input").value;
    getNumber2 = document.getElementById("num2_input").value;
    correctAnswer = getNumber1 * getNumber2;
    num1_2 = "<h4 id='displayWord'>"+ getNumber1 + "*" + getNumber2 + "</h4>";
    inputBox = "<input id='answerBox' type='text' placeholder='Type here what you think the word is:'>"
    checkButton = " <br> <button id='check' onclick='wordCheck()'> Check </button>";
    row = num1_2 + inputBox + checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1_input").value="";
    document.getElementById("num2_input").value="";
}

questionTurn = "Player1"
answerTurn = "Player2"

function wordCheck()
{
    getAnswer = document.getElementById("answerBox").value;

    if(getAnswer==correctAnswer)
    {
        if(answerTurn=="Player2")
        {
            p2_score = p2_score+1;
            document.getElementById("p2_score").innerHTML=p2_score;
            questionTurn = "Player2";
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
            answerTurn = "Player1"
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
        }

        else
        {
            p1_score = p1_score+1;
            document.getElementById("p1_score").innerHTML=p1_score;
            questionTurn = "Player1";
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
            answerTurn = "Player2"
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
        }
    }

    else
    {
        if(answerTurn=="Player2")
        {
            p1_score = p1_score+1;
            document.getElementById("p1_score").innerHTML=p1_score;
            questionTurn = "Player2";
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
            answerTurn = "Player1"
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
        }

        else
        {
            p2_score = p2_score+1;
            document.getElementById("p2_score").innerHTML=p2_score;
            questionTurn = "Player1";
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
            answerTurn = "Player2"
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
        }
    }

    if(p1_score==10)
    {
        document.getElementById("win").innerHTML="Game Over! "+player1_name+" Wins!";
    }

    if(p2_score==10)
    {
        document.getElementById("win").innerHTML="Game Over! "+player2_name+" Wins!";
    }

    document.getElementById("output").innerHTML="";
}