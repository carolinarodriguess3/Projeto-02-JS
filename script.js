// função para adicionar tarefa 
 
 function adicionarTarefa() {
      // let mensagem = "Tarefa adicionada com sucesso!";
            document.getElementById("mensagem").textContent = mensagem;

            let inputTarefa = document.getElementById("inputTarefa")
            let tarefa = inputTarefa.value
            document.getElementById("mensagem").textContent = tarefa;
            
            let listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")

            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)

            inputTarefa.value = ""

    }