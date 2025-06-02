# Err2Log

Frontend feito para o desafio proposto pela empresa Di2Win de construir uma aplicação web que monitora, lista e gerenciar erros e instabilidades ocorridas na API da inteligência artificial ExtrAI Dados.

## Requisitos

- Detectar erros na chamada a API da ExtrAI Dados com detalhes
- Enviar documento para ser analisado pela I.A
- Gerar relatórios com filtros por:
  - Data/Mês
  - Cliente
  - Tipo de documento

## Tecnologias utilizadas

- Next.js
- TailwindCSS
- Prettier
- Axios

## Instalação e execução

```bash
# Clonar repositório e entrar no diretório
git clone https://github.com/Deezinn/front-residencia.git
cd front-residencia

# Instalar dependencias
npm install

# Rodar aplicação
npm run dev
```

## Estrurura do projeto

```plaintext
src/
├── components/          # Pasta de components
├── const/ # Constantes
    └── index.js
├── enviar/              # Rota da tela de enviar arquivos, "/enviar"
    └── page.jsx
├── equipe/              # Rota da tela dos integrantes da equipe, "/equipe"
    └── page.jsx
├── relatorios/          # Rota de tela de listagem de erros, "/relatorios"
    └── page.jsx
├── favicon.ico          # Icone do site
├── globals.css          # Estilos globais
├── layout.js            # Root
└── page.js              # Página inicial, "/"
```
