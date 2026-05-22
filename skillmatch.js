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



    
