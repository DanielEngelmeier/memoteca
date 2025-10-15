# Projeto Angular - CRUD de Pensamentos

Este projeto foi desenvolvido como parte dos cursos **"Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD"** e **"Angular 14: evoluindo a aplicação"** da [Alura](https://www.alura.com.br). O objetivo é aprender os fundamentos do Angular e aplicar os principais conceitos em um projeto prático.

## ✍🏻 Próximas funcionalidades

- Busca
- Adicionar favoritos
- Visualizar favoritos

## 🧠 Conceitos estudados até agora

- Componentização com Angular
- Comunicação entre template e classe
- Diretiva ngModel para two-way data binding
- Organização de arquivos e boas práticas com Angular CLI
- Navegação com roteamento
- Diretivas estruturais e de atributos
- Comunicação com backend
- Requisições HTTP com Angular
- Formulários Reativos
- Validação em formulários reativos
- Paginação

## 🛠️ Tecnologias utilizadas

- Angular 14
- TypeScript
- HTML
- CSS

## 📦 Como executar

1. Clone o repositório:
   git clone https://github.com/DanielEngelmeier/memoteca.git
2. Instale as dependências:
   npm install
3. Execute o projeto:
   ng serve
4. Acesse no navegador: http://localhost:4200

## Observações sobre o JSON Server

A versão mais recente do `json-server` pode causar problemas de paginação, retornando os mesmos itens em diferentes páginas mesmo com parâmetros `_page`, `_limit`, `_sort`, etc.

Para evitar esse problema, recomenda-se instalar a versão **0.17.4**, que funciona corretamente com paginação.

### Instalação recomendada

```bash
npm uninstall -g json-server
npm install json-server@0.17.4
```

## 📌 Status

🚧 Em andamento — acompanhando o progresso do curso.
