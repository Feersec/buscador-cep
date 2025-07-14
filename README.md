# 📬 Buscador de CEP

Uma ferramenta de linha de comando desenvolvida em Node.js que, a partir de um CEP, busca e exibe o endereço completo. Este é um projeto de portfólio focado em demonstrar o consumo de APIs públicas e a manipulação de dados no back-end.

## ✨ Funcionalidades

-   Busca de endereço completo (logradouro, bairro, cidade e estado).
-   Aceita CEPs com ou sem formatação (ex: `01001000` ou `01001-000`).
-   Valida a entrada do usuário e trata erros para CEPs não encontrados ou inválidos.

## 🛠️ Tecnologias Utilizadas

-   **[Node.js](https://nodejs.org/en/ )**: Ambiente de execução para o JavaScript.
-   **[Axios](https://axios-http.com/ )**: Biblioteca para fazer a requisição HTTP para a API.
-   **[ViaCEP](https://viacep.com.br/ )**: API pública e gratuita utilizada para fornecer os dados de endereço.

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, você só precisa ter o Node.js instalado.

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/Feersec/buscador-cep.git
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd buscador-cep
    ```

3.  Instale as dependências necessárias:
    ```bash
    npm install
    ```

### Execução

Para buscar um endereço, execute o comando abaixo no seu terminal, substituindo `SEU_CEP_AQUI` pelo CEP que deseja consultar:

```bash
node index.js SEU_CEP_AQUI
