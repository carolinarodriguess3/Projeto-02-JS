// função para adicionar tarefa 
 
 function adicionarTarefa() {

             //recebe valor do input do usuário
            const inputTarefa = document.getElementById("inputTarefa")
            let tarefa = inputTarefa.value.trim()

            const mensagem = document.getElementById("mensagem")

            // se o valor de input for vazio, adicionar mensagem de erro

            if (tarefa == "") {
            let mensagemErro = "Digite uma tarefa para ser adicionada à lista!"
            mensagem.textContent = mensagemErro
            }

            //mensagem de tarefa adicionada com sucesso
            else {
            let mensagemSucesso = "Tarefa adicionada com sucesso!"
            mensagem.textContent = mensagemSucesso
            }
       
             //cria novo item (li) e insere na (lista ul)
            const listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")

            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)

            //limpa o input do usuário
            inputTarefa.value = ""

            

            


    }