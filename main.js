$(document).ready(function() {
    $("#todo").submit(function(e) {
        e.preventDefault();
        const nomeTarefa = $("#endereco-nome-da-tarefa").val().trim();
        
        if (nomeTarefa !== "") {
            const listarItem = $("<li>").text(nomeTarefa);
            $("#tarefas").append(listarItem);
            $("#endereco-nome-da-tarefa").val("");
        }
    });

    $(document).on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});