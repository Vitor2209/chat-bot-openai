# 🤖 Chat Bot OpenAI (Node.js)

Este projeto é um **chat bot simples** desenvolvido em **Node.js**, com **backend em Express** e um **frontend básico em HTML, CSS e JavaScript**.

O sistema foi projetado para se comunicar com a **API da OpenAI**, permitindo o envio de mensagens do usuário e o recebimento de respostas do modelo de linguagem.

> ⚠️ Observação importante:  
> No momento, a integração com a OpenAI não retorna respostas reais **apenas por falta de créditos na conta da API**, e não por erro de implementação.

---

## 📌 Funcionalidades

- Servidor backend em **Node.js + Express**
- Comunicação via **fetch (POST /chat)**
- Frontend simples e funcional
- Estrutura preparada para uso da **OpenAI API**
- Tratamento de erro específico para **quota excedida**
- Mensagem simulada quando não há crédito na API
- Separação clara entre **frontend** e **backend**

---

## 🗂️ Estrutura do Projeto

chat-bot-openai/
│
├── image/
│ ├── front.png
│ └── terminal.png
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md


---

## 🖥️ Interface do Projeto

### 📷 Frontend do Chat
Imagem da interface web do chat:

![Interface do Chat Bot](./image/front.png)


### 📷 Execução no Terminal
Imagem do projeto rodando no terminal:

![Execução no Terminal](./image/terminal.png)


> As imagens estão incluídas no repositório dentro da pasta `image/`.

---

## 🚀 Como rodar o projeto

### 1️⃣ Instalar dependências
```bash
npm install
2️⃣ Criar arquivo .env
OPENAI_API_KEY=SUA_CHAVE_AQUI
Mesmo sem crédito, a aplicação continua funcionando normalmente.

3️⃣ Iniciar o servidor
npm start
O servidor será iniciado em:

http://localhost:3000
🔁 Fluxo de Funcionamento
O usuário digita uma mensagem no frontend

A mensagem é enviada para a rota /chat

O backend tenta se comunicar com a OpenAI

Caso a API esteja sem crédito:

O erro é tratado

Uma resposta simulada é exibida

O frontend mostra a resposta ao usuário

⚠️ Sobre a OpenAI API
Este projeto está corretamente configurado para uso da OpenAI API.

Caso a mensagem abaixo apareça no terminal:

You exceeded your current quota
Isso indica apenas que:

A chave é válida

A requisição está correta

Não há crédito disponível na conta

Ou seja, o projeto está funcional e pronto para uso real assim que uma chave com crédito for adicionada.

🛠️ Tecnologias Utilizadas
Node.js

Express

Axios

dotenv

HTML5

CSS3

JavaScript (Vanilla)

✅ Status do Projeto
✔ Estrutura finalizada
✔ Backend funcional
✔ Frontend funcional
✔ Integração com OpenAI pronta
✔ Tratamento de erro implementado

Vitor Dutra Melo - Desenvolvedor 
