// Passo 1: Importar a biblioteca axios
const axios = require('axios');

// Passo 2: Pegar o CEP da linha de comando
// Usamos slice(2) para pegar todos os argumentos a partir do terceiro,
// e join('') para juntar caso o usuário digite o CEP com espaços ou traços.
const cep = process.argv.slice(2).join('');

// Verifica se o usuário digitou um CEP
if (!cep || cep.length < 8) {
    console.log("--------------------------------");
    console.log("Por favor, forneça um CEP válido.");
    console.log("Exemplo: node index.js 01001000");
    console.log("--------------------------------");
    process.exit(1); // Encerra o programa
}

// Passo 3: Montar a URL da API ViaCEP
const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

// Passo 4: Fazer a chamada para a API
axios.get(apiUrl )
    .then(response => {
        // Se a chamada for bem-sucedida...

        const endereco = response.data;

        // O ViaCEP retorna um erro dentro de um objeto de sucesso,
        // então precisamos verificar se a propriedade 'erro' existe.
        if (endereco.erro) {
            console.log("Erro: CEP não encontrado. Verifique o número e tente novamente.");
            return; // Para a execução aqui
        }

        // Exibe os resultados de forma organizada
        console.log("--------------------------------");
        console.log(`Endereço para o CEP: ${endereco.cep}`);
        console.log(""); // Linha em branco para espaçamento
        console.log(`Logradouro: ${endereco.logradouro}`);
        console.log(`Bairro: ${endereco.bairro}`);
        console.log(`Cidade: ${endereco.localidade}`);
        console.log(`Estado: ${endereco.uf}`);
        console.log("--------------------------------");
    })
    .catch(error => {
        // Se ocorrer um erro na conexão (ex: CEP com formato inválido)
        console.log("Ocorreu um erro ao buscar o CEP. Verifique se o formato está correto.");
        console.error("Detalhes:", error.message);
    });
