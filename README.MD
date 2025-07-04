# ChatGPT Clone - Node.js AI Project

Bem-vindo ao projeto ChatGPT Clone, uma aplicação que integra inteligência artificial usando Node.js, com frontend em React e backend configurado para suportar APIs de IA como Gemini. Este README reflete nossa jornada de desenvolvimento, alinhando simplicidade e funcionalidade.

## Visão Geral

Este projeto é uma clonagem de um chat baseado em IA, inicialmente projetado para usar a API do ChatGPT (OpenAI), mas adaptado para suportar a API do Gemini (Google). Ele combina:

## Frontend: Uma interface React rodando em localhost:3000.

Backend: Um servidor Node.js configurado para processar requisições de IA, atualmente na porta 5000.

## Pré-requisitos

Node.js (versão recente)

npm (gerenciador de pacotes)

Chave de API do Gemini (configure no .env)

## Instalação

### Backend

1. Navegue até a pasta server:

cd chatgpt-clone/server

2. Instale as dependências:

npm install

3. Configure a variável de ambiente no arquivo .env:

GEMINI_API_KEY=sua_chave_aqui
PORT=5000

4. Inicie o servidor:

node server.js

### Frontend

1. Navegue até a pasta web:

cd chatgpt-clone/web

2. Instale as dependências:

npm install

3. Inicie a aplicação:

npm run start


## Configuração da API

- O backend foi ajustado para usar a API do Gemini em vez do ChatGPT. Certifique-se de que o modelo gemini-2.0-flash está configurado no código (ex.: server.js).

- Atualize as chamadas de API no frontend para apontar para http://localhost:5000 (ajustado para evitar conflito de portas).

## Desenvolvimento

Ajustes Realizados: Resolvemos conflitos de portas, atualizamos dependências (ex.: react-scripts), corrigimos vulnerabilidades com npm audit fix --force e alinhamos o projeto para o Gemini.

Desafios Superados: Erros de reconhecimento de comandos, atualizações de pacotes obsoletos (ex.: eslint, svg) e integração de APIs.

## Como Usar

- Inicie o backend e o frontend conforme as instruções acima.

- Acesse http://localhost:3000 no navegador.

- Faça uma pergunta na interface — o backend deve processar via Gemini.

## Contribuição

- Sinta-se à vontade para contribuir! Abra issues ou pull requests para refinar a integração da API, melhorar a UI ou adicionar novos recursos.

## Licença

Licença MIT
