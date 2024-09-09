const raizDaListaEl = document.getElementById("raizDaLista");
const inputNovaTarefa1El = document.getElementById("inputNovaTarefa1");
const inputNovaTarefa2El = document.getElementById("inputNovaTarefa2");
const inputExibirTarefaEl = document.getElementById("inputExibirTarefa");
const inputExcluirTarefaEl = document.getElementById("inputExcluirTarefa");
const inputEditarTarefa1El = document.getElementById("inputEditarTarefa1");
const inputEditarTarefa2El = document.getElementById("inputEditarTarefa2");

const listaDeTarefas = [
	"Lavar a louça.",
	"Estudar programação.",
	"Levar o cachorro para passear.",
];

function exibirTarefasCadastradas() {
	let tarefas = "";
	for (let i = 1; i <= listaDeTarefas.length; i++) {
		tarefas += `<li>Tarefa nº ${i}: ${listaDeTarefas[i - 1]}</li>`;
	}
	raizDaListaEl.innerHTML = tarefas;
}

function cadastrarNovaTarefa() {
	const novaTarefa = inputNovaTarefaEl.value;
	if (inputNovaTarefaEl.value) {
		listaDeTarefas.push(novaTarefa);
		inputNovaTarefaEl.value = "";
		exibirTarefasCadastradas();
	} else {
		alert("Por favor, digite uma tarefa a ser cadastrada");
	}
}

function exibirTarefa() {
	const index = parseInt(inputExibirTarefaEl.value);
	if (listaDeTarefas[index - 1]) {
		raizDaListaEl.innerHTML = `<li>Tarefa nº ${index}: ${
			listaDeTarefas[index - 1]
		}</li>`;
		inputExibirTarefaEl.value = "";
	} else {
		inputExibirTarefaEl.value = "";
		alert("Não há tarefa cadastrada com este número");
	}
}

function excluirTarefa() {
	const index = parseInt(inputExcluirTarefaEl.value);
	if (listaDeTarefas[index - 1]) {
		listaDeTarefas.splice(index - 1, 1);
		inputExcluirTarefaEl.value = "";
		exibirTarefasCadastradas();
	} else {
		inputExcluirTarefaEl.value = "";
		alert("Não há tarefa cadastrada com este número");
	}
}

function editarTarefa() {
	const index = parseInt(inputEditarTarefa1El.value);
	const novoTexto = inputEditarTarefa2El.value;
	if (listaDeTarefas[index - 1] && novoTexto) {
		listaDeTarefas.splice(index - 1, 1, novoTexto);
		inputEditarTarefa1El.value = "";
		inputEditarTarefa2El.value = "";
		exibirTarefasCadastradas();
	} else if (!listaDeTarefas[index - 1]) {
		inputEditarTarefa1El.value = "";
		alert("Não há tarefa cadastrada com este número");
	} else if (!novoTexto) {
		alert("Por favor, digite o texto da nova tarefa editada");
	}
}

exibirTarefasCadastradas();
