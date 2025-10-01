# 🚀 Explorador de Campeões - League of Legends

> Uma aplicação web interativa desenvolvida com React para explorar o universo de campeões de League of Legends, com sistema de autenticação completo via Firebase.

Este projeto foi desenvolvido como avaliação final para a disciplina de Frameworks Web I, aplicando conceitos modernos de desenvolvimento frontend.


---

## ✨ Funcionalidades Principais

* **🔐 Autenticação Completa:** Sistema de **Login**, **Registro** e **Redefinição de Senha** utilizando Firebase Authentication.
* **🛡️ Rotas Protegidas:** Apenas usuários autenticados podem acessar a lista de campeões, detalhes e a página de perfil.
* **👤 Página de Perfil:** O usuário pode visualizar seu e-mail e **alterar sua senha** diretamente na plataforma.
* **CHAMPION_LIST** **Listagem Dinâmica:** Visualização de todos os campeões de League of Legends, com dados consumidos em tempo real da API oficial da Riot Games (Data Dragon).
* **🔍 Busca em Tempo Real:** Filtre os campeões instantaneamente pelo nome.
* **📄 Página de Detalhes:** Navegação para uma página dedicada a cada campeão, com sua história, título e habilidades.
* **🎨 UI Interativa e Atraente:**
    * Slideshow dinâmico na tela de login e registro.
    * Plano de fundo da aplicação muda para a arte do campeão ao passar o mouse sobre o card.
    * Efeito de foco na grade de campeões.
* **💅 Design Responsivo:** Interface adaptável para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e bibliotecas:

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca principal para a construção da interface de usuário. |
| **Vite** | Ambiente de desenvolvimento rápido e otimizado para projetos modernos. |
| **Styled Components** | Solução CSS-in-JS para estilização componentizada e coesa. |
| **React Router DOM** | Para gerenciamento de rotas e navegação entre páginas. |
| **Axios** | Cliente HTTP para consumir a API Data Dragon. |
| **Firebase** | Utilizado para o serviço de autenticação de usuários (Authentication). |

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* `npm` ou `yarn`

### Rodando Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GiovanyVMota/Frameworks.git](https://github.com/GiovanyVMota/Frameworks.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd frameworks-lol-champions-app
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Copie e cole o conteúdo abaixo no arquivo, substituindo os valores pelas suas credenciais do Firebase.
    * Veja a seção `🔑 Variáveis de Ambiente` para mais detalhes.

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🔑 Variáveis de Ambiente

Para que a conexão com o Firebase funcione, você precisa criar um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_KEY="SUA_API_KEY"
VITE_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
VITE_PROJECT_ID="SEU_PROJECT_ID"
VITE_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
VITE_MESSAGING_SENDER_ID="SEU_MESSAGING_SENDER_ID"
VITE_APP_ID="SEU_APP_ID"
```

> Você pode encontrar esses valores no painel do seu projeto Firebase, em **Configurações do Projeto > Geral > Seus aplicativos**.

---

## 🌐 Deploy

A aplicação está publicada e pode ser acessada através dos seguintes links:

* **Deploy (Vercel):** `https://frameworks-orp.vercel.app/`
* **Entrega (CodeSandbox):** `[LINK PÚBLICO DO SEU CODESANDBOX]`

---

## 🧑‍💻 Autores

Este projeto foi desenvolvido por:

* **Giovany V Mota** - [GitHub](https://github.com/GiovanyVMota)
* **Tallis Teixeira** - [GitHub](https://github.com/tallismelo07)
* **Marcos Rezende** - [GitHub](https://github.com/marcosjrzz)
* **Hiago Vinicius** - [GitHub]()(https://github.com/Hiagovisk)