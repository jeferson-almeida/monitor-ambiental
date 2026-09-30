// Elementos da DOM
const tempElement = document.getElementById('temp-value');
const lightElement = document.getElementById('light-value');

// Função para gerar valores simulados (remover quando integrar com hardware real)
function gerarDadosAleatorios() {
    // Simula temperatura entre 20°C e 35°C com uma casa decimal
    const temperatura = (Math.random() * (35 - 20) + 20).toFixed(1);
    
    // Simula luminosidade em Lux entre 100 lx (sombra) e 900 lx (claro)
    const luminosidade = Math.floor(Math.random() * (900 - 100) + 100);

    atualizarInterface(temperatura, luminosidade);
}

// Função para atualizar os valores na tela
function atualizarInterface(temp, light) {
    tempElement.textContent = `${temp} °C`;
    lightElement.textContent = `${light} lx`;
}

// Atualiza a cada 3 segundos (Simulação)
setInterval(gerarDadosAleatorios, 3000);

// Executa uma vez logo ao carregar a página
gerarDadosAleatorios();


/* 
  ====================================================================
  EXEMPLO DE COMO INTEGRAR COM UM HARDWARE REAL (Ex: ESP32 via API/Fetch)
  ====================================================================
  
  async function buscarDadosDoSensor() {
      try {
          const resposta = await fetch('http://IP_DO_SEU_ESP32/dados');
          const dados = await resposta.json();
          
          // Supondo que o JSON retorne { temperatura: 25.5, luminosidade: 450 }
          atualizarInterface(dados.temperatura, dados.luminosidade);
          
          document.getElementById('connection-status').textContent = "Online";
          document.getElementById('connection-status').style.color = "#22c55e";
      } catch (erro) {
          console.error("Erro ao buscar dados do sensor:", erro);
          document.getElementById('connection-status').textContent = "Desconectado";
          document.getElementById('connection-status').style.color = "#ef4444";
      }
  }

  // Se for usar hardware real, substitua o setInterval acima por:
  // setInterval(buscarDadosDoSensor, 2000);
*/