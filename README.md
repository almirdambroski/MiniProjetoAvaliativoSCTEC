# Mini Projeto Avaliativo - SC TEC

O SkillMatch JS é um simulador simples de compatibilidade entre um candidato e vagas de front-end júnior que compara habilidades com os requisitos que a vaga mostra.

## Objetivo

Este é um projeto desenvolvido como parte da avaliação do programa Carreira Tech SC.
E tem como objetivo praticar os principais conceitos do Módulo 01, visando apreximar o aluno do curso em uma situação real: analisar requisitos de vagas, comparar habilidades, calcular aderência e identificar pontos de melhoria. Junto ferramentas como Kanban visa melhoras a organização prifissional e o Git e GitHub onde fluxo, arazanamento e versionamento alem do pratico. alinhado ao mercado.

- Como a Internet Funciona
  A internet é uma gigantesca rede global de computadores interconectados que trocam informações entre si. Quando digitamos um endereço web ou realizamos uma requisição, os dados são divididos em pequenos pedaços chamados **pacotes**. Esses pacotes viajam por cabos de fibra óptica, roteadores e satélites utilizando um conjunto de regras padronizadas conhecido como protocolo **TCP/IP** (que garante que os dados cheguem inteiros e ao destino correto). Cada dispositivo conectado possui um endereço exclusivo chamado **IP**, que serve para identificá-lo na rede. Atraves de navegadores em dispositivos usuarios fazem requisição ou envio de conteúdo desejado.

- Arquitetura Cliente-Servidor
  A arquitetura cliente-servidor é o modelo de computação que divide as tarefas na rede entre dois componentes principais:
- **Cliente:** É o dispositivo ou aplicação que solicita um serviço ou dado (por exemplo, o navegador web do usuário ou o app mobile).
- **Servidor:** É um computador potente na nuvem que armanha os dados, processa as regras de negócio e "serve" as respostas para o cliente.

**Relação com o projeto:** No código do arquivo `skillmatch.js`, a função assíncrona `buscarVagasSimuladas()` utiliza uma **Promise** com `setTimeout` para simular exatamente esse comportamento. O cliente (função principal `iniciarSistema`) faz uma requisição assíncrona e fica aguardando (via `await`) o "servidor simulado" processar e devolver a lista de vagas após 1 segundo.

- ### Diferenças entre `var`, `let` e `const`
  No JavaScript moderno, prioriza-se o uso de `let` e `const` para evitar comportamentos inesperados no código (como o efeito de _hoisting_):

* **`const`:** Utilizado para declarar variáveis cujos valores não devem ser reatribuídos ao longo do código. Possui escopo de bloco.
* **`let`:** Utilizado para variáveis que precisam ter seus valores alterados ou reatribuídos durante a execução. Também possui escopo de bloco.
* **`var`:** O modelo antigo de declaração. Possui escopo de função ou global, o que pode vazar valores para fora de estruturas como loops e condicionais, gerando bugs difíceis de encontrar.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Extensão: Prettier
- Trelo para Kanban

- Kanban
  Criar o arquivo .js
  Criar as branchs.
  Criar repositório no GitHub
  Iniciar o README.
  Criar Peerfil do candidato.
  Criar lista de vagas.
  Criar classe.
  USar herança.
  Classificar habilidades.
  USar Array.
  Calcular compatibilidade com cada vaga.
  USar closure.
  Usar Calback.
  Gerar recomendação de estudo.
  USar promisse async/await.
  Demonstrar o uso do this.
  Exibir resultados.
  Listar habilidades faltante.
  Encontrar vagas com compatibilidades.
  Atualizar README.

NO projeto foi usado os conceito de:
=´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

- Uso de lógica de programação;
- Uso de JavaScript;
- tipos de dados;
- condicionais;
- operadores;
- escopo;
- laços de repetição;
- funções;
- arrow functions;
- arrays;
- métodos de array;
- objetos;
- classes;
- herança;
- this;
- callbacks;
- closures;
- Promises;
- async/await;
- GitHub;
- Kanban

## Como executar o projeto

1. Clone este repositório:
   Para executar não precisa de NODE.js
   git clone [https://github.com/almirdambroski/MiniProjetoAvaliativoSCTEC.git]

   Você pode executar de uma destas formas:

1. Abrir o navegador Google Chrome.
1. Pressionar F12 ou Ctrl + Shift + J.
1. Abrir a aba Console.
1. Copiar o código do arquivo skillmatch.js.
1. Colar no console.
1. Pressionar Enter.

##Erro:
Melhorias futuras.
Corigir alguns erros que por falta de tempo e experiencia não foi possivel.
Tambem elaborar um interface interatica com úsuarios será uma grande melhoria.

## Estrutura do projeto

skillmatch-js/
│
├── skillmatch.js
└── README.md

## Link solicitado

GitHub
https://github.com/almirdambroski/MiniProjetoAvaliativoSCTEC.git

Kanban
https://trello.com/invite/b/6a0bc65b5d0b3496b5303bed/ATTI5cbb1de03cc44546924110ebc8e55ef8C3348272/skillmatch

Vídeo
