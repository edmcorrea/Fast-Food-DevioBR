# Fast-Food-DevioBR

Tasks - Usabilidade OBRIGATORIAS

<!-- - Poderá ver uma pequena quantidade de produtos na tela -->
  <!-- - Poderá selecionar os produtos da tela inicial -->

<!-- - Criar input para pesquisar dados
  - É possível buscar produtos pelo seu NOME
  - É possível buscar produtos pelo seu CODIGO  -->

- Resumo do pedido
  <!-- - É possível ADICIONAR itens no carrinho -->
  <!-- - É possível REMOVER itens no carrinho -->
  <!-- - Encaminhar para ÁREA DE PAGAMENTO -->

- Finalizar o pedido
  <!-- - Deverá ver o RESUMO DA COMPRA -->
  - Refatorar OrderDetails
  <!-- - O usuário deve visualizar o valor TOTAL DO PEDIDO -->
  <!-- - o usuário deve visualizar o TROCO DO PEDIDO -->
  <!-- - Deverá ser possível adicionar o NOME DO CLIENTE -->
  <!-- - Utilizar impressão termica -->
  - Descomentar a Função do thermal Printer no arquivo: backend>app>controllers>customer.controller
  - copiar o migration do prisma para o prisma do backend
  <!-- - Deve liberar a tela para o proximo pedido -->

- Cozinha
  <!-- - Após finalizado o pedido, deve ser adicionado na cozinha -->
    <!-- - O nome do cliente deve estar incluso no pedido (obrigatoraimente) -->
  <!-- - A cozinha pode dar baixa nos pedidos concluidos (a função "preparando" vai para o "concluido") -->
  <!-- - Inserir a mensagem de "pedido criado" em "Order" -->
  <!-- - responsividade -->
  - alimentar categories (tanto o categorie quanto as infos dos produtos)
  - fazer readme
  <!-- - fazer deploy -->
  - persistir no storage
  <!-- - inserir "vezinho" no product já escolhido -->
  - inserir checkbox on productdetails
  - background da pagina principal
  - REMOVER CONSOLE.LOG E COMENTARIOS
  



Tasks - Usabilidade OPCIONAIS

<!-- - Pedidos devem aparecer para a cozinha em tempo real -->
  <!-- - usar long Pooling ou WebSockets -->
  <!-- - Implementar uma situação para quando o usuário compra mais de um produto -->

- Observações no Pedido
  <!-- - O usuário pode incluir uma observação para a cozinha -->

- Formas de Pagamento (Finalização do pedido)
  <!-- - Incluir as formas de pagamento na finalização do pedido. -->

- Pedidos em Concluidos
  <!-- - Pedidos concluidos aparecem em uma tela com o nome do cliente  -->
  - Editar o pedido já solicitado (em OrderDetails / SummaryOrder)


<div align="center">

  ## Fast Food Project
  
  <div align="center">
    <img width="700" height="400" src="src/assets/chatbotLuzia.gif">
  </div>
  
  <br />
  
  <p align="center">
    <a href="https://fast-food-project-one.vercel.app/"><strong>Browse the web demo version »</strong></a>
  </p>
</div>


This is my solution for designing a chatbot (Luzia) with interactive features and user validation functionality. Luzia was designed to deliver personalized messages to each user. In addition, she has specific knowledge related to loan.

<br>

## Technologies Used:
---

- Frontend: **Vite + React.js**
- Other Libraries: **React-Hooks, React-Chatbot-Kit, React-CSV, Jest, React-Testing-Library (RTL).**

<br>

## Creation process:
---

During the process of creating the project, some steps were taken to meet the main objectives and needs proposed in the challenge. The following story recounts the development of the project, from the initial understanding to the end of the project.

<details>

<summary><strong>Click for more details</strong></summary>

- Reading and Understanding the Project:
After receiving the Full Stack Developer Review challenge, a thorough reading of the presented requirements was carried out. This included understanding expected functionality such as the need to interpret terms for conversation initiation, require a username, password and your validations, display buttons, export the historic conversation, and other. This step was essential to define the direction of development.

- Use of new technologies: The challenge proposes the creation of a chatbot. Initially then, I dedicated time to learning related technologies, through tutorials, documentation and code examples to acquire the necessary knowledge to implement the project. Finally, I decided to implement the `react-chatbot-kit` and `React-csv` library for its construction, since it presented what was necessary for the development of the project.

- Creation of the MVP: Once the design decisions were finalized, an MVP (Minimum Viable Product) was created. In this phase, the basic components of the frontend application were developed to guarantee a functional code.

- Review of Components and Functionalities: With the basic functionality implemented, a review of the developed components was carried out. Code improvements, style adjustments and refactorings were made to ensure the quality and usability of the chatbot.

- Creating Tests: To ensure the quality and stability of the code, tests were developed using the Jest and React Testing Library.

</br>

</details>

<br>

## Features
---
- `User Input`: Users need to login to your account using your name and password.

- `Login Validations`: The user is only allowed access to Luzia Bot after validation of the access data

- `Full Access after Login`: After login, all chatbot functionality is released.

- `Interactive Chat`: the chatbot talks with users and has personalized responses to each customer's question

- `Service options`: During the conversation with Luzia Bot, the user has access to options with relevant information and a link for reference.

- `End of conversation`: The chat with Luzia Bot is only ended after the user says "Goodbye".

- `Download History`: After the user says “Goodbye”, it is possible to download the entire conversation history in a csv file.

<br>

## Getting Started
---

### To run the project locally:

1. Clone this repository: `git clone git@github.com:edmcorrea/Chatbot-Project-Luzia.git`
2. Navigate to the project directory: `cd Chatbot-Project-Luzia/`
3. Install the required dependencies using `npm install`.
4. Start the application using `npm run dev`.
5. O projeto estará sendo executado em `http://localhost:5173/`.

<br>

## How to Use
---

1. Say terms like `"Hello", "Goodbye", "Good", "Good Morning", "Good Afternoon", "Good Night", "I want ..."` to initiate a conversation.
2. Enter a `Username` (up to 5 characters) and `Password` (up to 8 characters) to continue the conversation.
3. Engage in a conversation with the chatbot and explore the available service options. (you can have access to a lot of information and reference links).
4. When you want to end the conversation, `type "Goodbye"`.
5. Chat history will be `available automatically` after saying "goodbye".

<br>

## External Documentation

- Vite + React: `https://vitejs.dev/guide/`
- Node-Thermal-Printer: `https://github.com/Klemen1337/node-thermal-printer`
- React CSV: `https://www.npmjs.com/package/react-csv`