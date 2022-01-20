function login_storage()
{
    var p1_name = document.getElementById("first_input").value;
    var p2_name = document.getElementById("second_input").value;

    localStorage.setItem("Player1_Name", p1_name);
    localStorage.setItem("Player2_Name", p2_name);

    window.location = "game_page.html";
}