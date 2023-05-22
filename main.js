function add(){
    var nome1 = document.getElementById("inputNome1").value;
    var nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game.html";
}
