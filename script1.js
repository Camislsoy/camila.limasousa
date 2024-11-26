document.addEventListener('DOMContentLoaded', () => {
    const entradaTarefa = document.getElementById('entradaTarefa');
    const botaoAdicionar = document.getElementById('botaoAdicionar');
    const listaTarefas = document.getElementById('listaTarefas');
  
    // Carregar tarefas do LocalStorage
    const carregarTarefas = () => {
      const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
      listaTarefas.innerHTML = '';
      tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${tarefa}
          <button onclick="removerTarefa(${index})">Remover</button>
        `;
        listaTarefas.appendChild(li);
      });
    };
  
    // Adicionar uma nova tarefa
    const adicionarTarefa = () => {
      const tarefa = entradaTarefa.value.trim();
      if (tarefa) {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        entradaTarefa.value = '';
        carregarTarefas();
      }
    };
  
    // Remover uma tarefa botao vermelho 
    window.removerTarefa = (index) => {
      const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
      tarefas.splice(index, 1);
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      carregarTarefas();
    };
  
    // Eventos
    botaoAdicionar.addEventListener('click', adicionarTarefa);
    entradaTarefa.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') adicionarTarefa();
    });
  
    // Carregar tarefas na inicialização
    carregarTarefas();
  });
  