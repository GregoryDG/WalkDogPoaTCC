$(document).ready(function(){

    $('#btnAdicionar').click(function(){


        var nomeDog = $("#inputNome").val();
        var porteDog = $("#inputPorte").val();
        var descriptDog = $("#inputDescript").val();

        adicionaTarefa(nomeDog, porteDog, descriptDog);

        $('.btnEditar').click(function(){
            editTarefa(this);
            
        })

        $('.btnExcluir').click(function(){
            excluiTarefa(this);
            

        })

        console.log(this);
    })

   
})

function adicionaTarefa(nomeDog, porteDog, descriptDog) {
    //constroiId

    //controi linha a ser adicionada
    var elementoTarefa = "<tr>";
        elementoTarefa += "<td class='textoNomeDog'>"+ nomeDog +"</td>";
        elementoTarefa += "<td class='textoPorteDog'>"+ porteDog +"</td>";
        elementoTarefa += "<td class='textoDescripDog'>"+ descriptDog +"</td>";
        elementoTarefa += "<td><button type='button' id='btnEditar' class='btn btn-default btnEditar'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td>";
        elementoTarefa += "<td><button type='button' id='btnExcluir' class='btn btn-default btnExcluir'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>"
        elementoTarefa += "</tr>";

    //adiciona linha na tabela
    $("Body table").append(elementoTarefa);
    //configura o ultimo id
    $('#ultimoId').val(id);
    
}
function editTarefa(botaoEditar) {

    var idTarefaEditada = $('#idTarefaEditada').val();

    if (idTarefaEditada > 0)
        return;

    var textoNomeDog = $(botaoEditar).parents("tr").children(".textoPorteDog").text();
    var idTarefa = $(botaoEditar).parents("tr").children(".idTarefa").text();

    $("#inputNome").val(textoNomeDog);

    $("#idTarefaEditada").val(idTarefa);

    excluiTarefa(botaoEditar);
             
}

function excluiTarefa(botaoExcluir) {
     $(botaoExcluir).parents("tr").remove();
}

function constroiID() {
    var idTarefaEditada= $("#idTarefaEditada").val();

    if(idTarefaEditada > 0){
        $("#idTarefaEditada").val(0);
        return idTarefaEditada;
    }

    var id = parseInt($('#ultimoId').val()) + 1;
    return id;
}