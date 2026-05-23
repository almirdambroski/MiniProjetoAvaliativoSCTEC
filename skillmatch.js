//RF01 – Criar o perfil do candidato
//Objeto simples usado

const candidato = {
    nome: "Almir",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    experienciaMeses: 3
};

//RF02 – Criar uma lista de vagas
//array com pelo menos 03 vagas fictícias.
const vagas = [
    {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto"
    },
    {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"
    },
    {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3000,
    modalidade: "Presencial"
    }
];

//RF09 – Criar uma classe
//Criar pelo menos uma classe simples
class Vaga {
constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    }


    //RF11 – Demonstrar uso do this
    //Demostrar pelo 1 this
    exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
    }
}

//Rf10 - Uso de herança
//Herdar poderes da classe vaga (pai)
class VagaFrontEnd extends Vaga {
constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);//O metodo super() repassa dados para o construtor da classe Vaga()
    this.nivel = nivel; ///Atributos exclusivo desta classe filho (Exemplo: Junir, estagiario)
    }
    exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
    }
}

//RF02 Lista ofical das vagas
//Estanciando as classe.

const listaVagas = [
    new VagaFrontEnd("TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação"], 2800, "Remoto", "Júnior"),
    new VagaFrontEnd("CodeLab", "Estágio Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido", "Estágio"),
    new Vaga("WebSolutions", "Programador JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial")
];

//Rf 04 - Classificar a compatibilidade
// Usar condição if else
function classificarCompatibilidade(percentual){
    if(percentual >= 80){
        return "Alta compatibilidade";
    }else if(percentual >= 50){
        return "Media Compatibilidade"
    }else{
        return "Baixa compatibilidade";
    }
}
//Rf03, RF02, RF08 analizar a cada vaga com o metodo array.
function analizarVaga(vaga, habilidadesCandidato){
    //Rf08 com o filter -> Filtra a guarda as bilidades que o candidato possui.
    const habilidadesEncontradas = vaga.requisitos.filter(req =>
        habilidadesCandidato.includes(req)
    );

     //Rf08 com o filter -> Filtra a guarda as habilidades que esta faltando com o candidato.
    const habilidadesEncontradas = vaga.requisitos.filter(req =>
        !habilidadesCandidato.includes(req)  //Ponto de esclamação inverte a busca do filter
    );

    //RF03 - Cáculo matematico da porcentagem de compatibllidade.
    const totalRequisitosvaga = vaga.requisitos.length;
    const totalAtendidos = habilidadesEncontradas.length;

    //Foi usado a Regua dos três para calcular o percentual.
    const percentual = totalRequisitosvaga >0 ? Math.round((totalAtendidos / totalRequisitosvaga)*100) : 0;

    //APlica a classificação da RF04 baseada em porcentagem
    const classificacao = classificarCompatibilidade(percentual);
    
    //Retorna um objetos com a demonstração completa da vaga.
    return{
        empresa: vaga.empresa,
        cargo: vaga.cargo,
        compatibilidade: percentual,
        habilidadesEncontradas: habilidadesEncontradas,
        habilidadesFaltantes: habilidadesFaltantes,
        classificacao: classificacao
    };
}
//RF13 - Usando closure - Para criar um contador interno 

function criarContadorDeAnalises() {
  let total = 0; //Variavel protegida internamento pelo escopo da closure

  return function () {
    total++;//Faz incremento a variável interna toda vez que a função interna é chamada
    return total; //retorna
  };
}
//Incializa o contador da análise
const contarProximaAnalisse = criarContadorDeAnalises();

//RF12 - Usar callback   (Vai executar ao finalizar todo o processamento)
//Criar uma função que receba outra função como parâmetro
function finalizarAnalise(nomeCandidato, callback){
    console.log("\n------------------------------------------------");
    console.log("Analisse finalisada.");
    callback(nomeCandidato);
}
function exibirMensagemFinal(nome){

    console.log(`${nome},revise suas habilidades faltantes e atualise seu planos de estudos.`);
}
//RF07 - Gerar uma recomendação de estudo
//Com base nas habilidades faltantes, o sistema deverá sugerir o que estudar

function gerarRecomendacaoEstudo(todasAnalises) {
    let listaFaltantesAcumuladas = [];

    //Juntar todas as habilidades que faltam em uma lista única.
    todasAnalises.forEach(analise =>{
        analise.habilidadesFaltantes.forEach(skill =>{
            if(!listaFaltantesAcumuladas.includes(skill)){
                listaFaltantesAcumuladas.push(skill);
            }
        });
    });
    if(listaFaltantesAcumuladas.length === 0){
        return "Parabéns! Você esta muito bem e atende todos s requisitos das vagas analisadas."
    }
    return `Priorize estudar: [${listaFaltantesAcumuladas.join(", ")}], pois esses conteúdos aparecem nas vagas analisadas.`
}

//RF14 - Usar Promise e async/await
//Simular o carregamento das vagas como se os dados viessem de um servidor. Não é necessário usar API real. 
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {//Simula um atrasod e 1 segundo (100ms) para responder simulado a rede
      resolve(listaVagas);//Vai criar a lista de vagas que criamos la no começo
    }, 1000);
  });
}






    
