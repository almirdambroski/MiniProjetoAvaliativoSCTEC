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
