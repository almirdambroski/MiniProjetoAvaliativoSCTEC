//RF01 – Criar o perfil do candidato
//Objeto simples usado

const candidato = {
    nome: "Almir",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    experienciaMeses: 3
};



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
    new VagaFrontEnd("WebSolutions", "Programador JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", "Júnior")
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
    const habilidadesFaltantes = vaga.requisitos.filter(req =>
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


//Função principal assíncrona reponsável por gerencial o fluxo completo do sistema
async function iniciarSistema() {
    console.log("Carregando vagas do servidor simulado...");

    //o "awai" faz o código carregar um segundo até que a Promisse seja resolvido
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas carregadas com sucesso");

  // RF08 - Usar métodos de array -. trasnforma uma lista de vagas em um lista de análisse.
  // O projeto deverá usar pelo menos 3 métodos de array entre: map; filter; find; every; reduce.
 const resultadosDasAnalises = vagasCarregadas.map(vaga => {
    contarProximaAnalisse(); // Incrementa o contador privado da closure
    return analizarVaga(vaga, candidato.habilidades);
});
//  EXIBIÇÃO DOS RESULTADOS NO CONSULE

//RF03 - Exibe os dados individuais de compatibilidade de cada vaga CONFORME O MODELO RF03
resultadosDasAnalises.forEach(analise => {
        console.log(`Empresa: ${analise.empresa}`);
        console.log(`Cargo: ${analise.cargo}`);
        console.log(`Compatibilidade: ${analise.compatibilidade}%`);
        console.log(`Habilidades encontradas: ${analise.habilidadesEncontradas.join(", ")}`);
        console.log(`Habilidades faltantes: ${analise.habilidadesFaltantes.join(", ") || "Nenhuma"}`);
        console.log(`Classificação: ${analise.classificacao}`);
        console.log("------------------------------------------------");
    });

   //RF05 detalhamente das habilidades faltante agrupadas
   console.log("\n   DETALHAMENTE DAS  HABILIDADES FALTANTE ===");
   resultadosDasAnalises.forEach(analise => {
    
        if(analise.habilidadesFaltantes.length > 0) {
            console.log(`Para a vaga da ${analise.empresa}, faltam:`);
            analise.habilidadesFaltantes.forEach(skill => console.log(` - ${skill}`));
    }else{
            console.log(`Para a vaga da ${analise.empresa}: Você possui todos os requisitos!`);
        }
   });

   //RF06 - Encontrando a vaga com maior compatibilidade usando (loop for....of)
   let vagaMaisCompativel = null;
   for(const analise of resultadosDasAnalises){
    if(!vagaMaisCompativel || analise.compatibilidade > vagaMaisCompativel.compatibilidade){
        vagaMaisCompativel = analise;
    }
   }

   if(vagaMaisCompativel){
    console.log("\n  VAGA MAIS COMPATÍVEL ");
    console.log(`Vaga mais compatível: ${vagaMaisCompativel.empresa} - ${vagaMaisCompativel.cargo}`);
    console.log(`Compatibilidade: ${vagaMaisCompativel.compatibilidade}%`);
   }

   //RF07 - Exibe a recomendação unificada de estudos
   console.log("\n  RECOMENDAÇÃO DE ESTUDOS");
   const recomendacao = gerarRecomendacaoEstudo(resultadosDasAnalises);
   console.log(recomendacao);

   // RF12 - Encerrando o fluxo chamando a função de calback

   finalizarAnalise(candidato.nome, exibirMensagemFinal);
}
//exeutar o sistema completo
iniciarSistema();




    

