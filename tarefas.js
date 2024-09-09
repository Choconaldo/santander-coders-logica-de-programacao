// Obtenção dos elementos do DOM
const raizDaListaEl = document.getElementById("raizDaLista");
const inputNovaTarefa1El = document.getElementById("inputNovaTarefa1");
const inputNovaTarefa2El = document.getElementById("inputNovaTarefa2");
const inputExibirTarefaEl = document.getElementById("inputExibirTarefa");
const botoesDeEdicaoEl = document.getElementById("botoesDeEdicao");
const inputExcluirTarefaEl = document.getElementById("inputExcluirTarefa");
let inputEditarTarefa1El;
let inputEditarTarefa2El;

// Variável que armazena as tarefas cadastradas
let listaDeTarefas = [
	{
		titulo: "Lavar a louça",
		texto: "Lavar a louça do almoço",
		id: "_9035e2u",
	},
	{
		titulo: "Estudar programação",
		texto: "Estudar o exercício 02 dado na aula de lógica de programação.",
		id: "_26z4jja",
	},
	{
		titulo: "Levar o cachorro para passear",
		texto: "Levar o cachorro para dar uma volta no quarteirão e fazer suas necessidades",
		id: "_z7qniyh",
	},
];

// Variável que armazena o Id da tarefa selecionada:
let idTarefaSelecionada = "";

// Função que exibe as tarefas cadastradas
function exibirTarefasCadastradas() {
	let tarefas = "";
	listaDeTarefas.forEach(
		(tarefa) =>
			(tarefas += `<li>
				<strong>${tarefa.titulo}</strong>
				<br />
				${tarefa.texto}
				<br />
				Id da tarefa: ${tarefa.id}
			</li>
            <br />`)
	);
	raizDaListaEl.innerHTML = tarefas;
	inputExibirTarefaEl.value = "";
	botoesDeEdicaoEl.innerHTML = "";
	idTarefaSelecionada = "";
}

// Função para gerar um ID único
function gerarId() {
	return "_" + Math.random().toString(36).substring(2, 9);
}

// Função para cadastrar uma nova tarefa
function cadastrarNovaTarefa() {
	const novaTarefa = {
		titulo: inputNovaTarefa1El.value,
		texto: inputNovaTarefa2El.value,
		id: gerarId(),
	};
	if (inputNovaTarefa1El.value && inputNovaTarefa2El.value) {
		listaDeTarefas.push(novaTarefa);
		inputNovaTarefa1El.value = "";
		inputNovaTarefa2El.value = "";
		exibirTarefasCadastradas();
	} else {
		alert(
			"Por favor, digite o título e o texto da tarefa a ser cadastrada"
		);
	}
}

// Função que exibe os botões de edição da tarefa selecionada

function exibirBotoesEdicao() {
	botoesDeEdicaoEl.innerHTML = `<br />
			<button onclick="excluirTarefa()">Excluir tarefa exibida</button> <button onclick="exibirTarefasCadastradas()">
			Exibir todas as tarefas cadastradas
		</button>
			<br /><br />
            <hr />
            <h2>Editar tarefa exibida:</h2>
			<label
				>Novo título da tarefa exibida:
				<input type="text" size="30" id="inputEditarTarefa1" />
			</label>
            <br /><br />
			<label
				>Novo texto da tarefa exibida:
				<input type="text" size="50" id="inputEditarTarefa2"
			/></label>
            <br /><br />
			<button onclick="editarTarefa()">Salvar alterações</button>
            <br /><br />
		`;
	inputEditarTarefa1El = document.getElementById("inputEditarTarefa1");
	inputEditarTarefa2El = document.getElementById("inputEditarTarefa2");
}

// Função que exibe uma única tarefa pelo Id
function exibirTarefa() {
	const tarefaSelecionada = listaDeTarefas.filter(
		(tarefa) => tarefa.id === inputExibirTarefaEl.value
	);
	if (tarefaSelecionada.length) {
		raizDaListaEl.innerHTML = `<li>
				<strong>${tarefaSelecionada[0].titulo}</strong>
				<br />
				${tarefaSelecionada[0].texto}
				<br />
				Id da tarefa: ${tarefaSelecionada[0].id}
			</li>
            <br />`;
		idTarefaSelecionada = tarefaSelecionada[0].id;
		exibirBotoesEdicao();
	} else {
		inputExibirTarefaEl.value = "";
		alert("Não há tarefa cadastrada com este Id");
	}
}

// Função que exclui a tarefa exibida
function excluirTarefa() {
	listaDeTarefas = listaDeTarefas.filter(
		(tarefa) => tarefa.id !== idTarefaSelecionada
	);
	exibirTarefasCadastradas();
}

// Função que edita a tarefa exibida
function editarTarefa() {
	if (inputEditarTarefa1El.value && inputEditarTarefa2El.value) {
		listaDeTarefas = listaDeTarefas.map((tarefa) => {
			if (tarefa.id === idTarefaSelecionada) {
				tarefa.titulo = inputEditarTarefa1El.value;
				tarefa.texto = inputEditarTarefa2El.value;
				return tarefa;
			}
			return tarefa;
		});
		exibirTarefasCadastradas();
	} else {
		alert(
			"Por favor, digite o novo título e o novo texto da tarefa a ser editada"
		);
	}
}

exibirTarefasCadastradas();
