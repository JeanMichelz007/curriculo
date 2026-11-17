const dados = [
    {
        curriculo: {
            metadados: {
                versao: "1.0",
                idioma: "pt-BR",
                ultimaAtualizacao: "2026-11-05"
            },

            informacoesPessoais: {
                nomeCompleto: "Jean Michel Santos da Fonseca",
                tituloProfissional: "Estudante de ADS",
                fotoPerfil: "imagens/download.jpeg",
                email: "jmsf061207@gmail.com",
                telefone: "11 98059-6586",
                whatsapp: "11 98059-6586",

                localizacao: {
                    cidade: "Suzano",
                    estado: "São Paulo",
                    pais: "Brasil",
                    endereco: "Rua Nações Unidas 100"
                },

                linkedin: "",
                github: "https://github.com/JeanMichelz007",
                portfolio: "",
                site: ""
            },

            resumoProfissional: {
                descricao: "Estudante de Análise e Desenvolvimento de Sistemas focado em construir uma base sólida em programação, desenvolvendo projetos práticos em desenvolvimento web e lógica de programação em busca da primeira oportunidade de estágio na área.",

                anosDeExperiencia: 0,
                especializacaoPrincipal: "Programação",

                objetivoProfissional: "Estudar e construir uma base sólida em programação para conquistar um estágio em Análise e Desenvolvimento de Sistemas (ADS)."
            },

            experienciaProfissional: [],

            formacaoAcademica: [
                {
                    instituicao: "Centro Universitário Piaget (UNIPIAGET)",
                    grau: "Tecnólogo",
                    areaDeEstudo: "Análise e Desenvolvimento de Sistemas",
                    nivel: "Ensino Superior",
                    dataInicio: "2026-02-01",
                    dataFim: "2028-07-01",
                    atual: true,

                    descricao: "Graduação tecnológica focada em lógica de programação, desenvolvimento web, banco de dados e engenharia de software."
                }
            ],

            habilidades: {
                tecnicas: [
                    {
                        nome: "HTML5",
                        nivel: "Básico / Intermediário"
                    },
                    {
                        nome: "CSS3",
                        nivel: "Básico / Intermediário"
                    },
                    {
                        nome: "JavaScript",
                        nivel: "Básico"
                    },
                    {
                        nome: "Lógica de Programação",
                        nivel: "Intermediário"
                    }
                ],

                comportamentais: [
                    "Vontade de aprender",
                    "Dedicação",
                    "Resolução de problemas",
                    "Trabalho em equipe"
                ],

                ferramentas: [
                    "Git",
                    "GitHub",
                    "VS Code"
                ],

                metodologias: [
                    "Desenvolvimento Web Responsivo"
                ]
            },

            idiomas: [
                {
                    nome: "Português",
                    proficiencia: "Nativo"
                },
                {
                    nome: "Inglês",
                    proficiencia: "Básico (Leitura técnica)"
                }
            ],

            certificacoes: [],

            projetos: [
                {
                    nome: "Calculadora de IMC",
                    descricao: "Aplicação web interativa para cálculo e classificação de Índice de Massa Corporal (IMC).",
                    funcao: "Desenvolvedor",
                    tecnologias: ["HTML", "CSS", "JavaScript"],
                    url: "https://github.com/JeanMichelz007/calculadora-imc",
                    dataInicio: "2026-08-01",
                    dataFim: "2026-08-15"
                },
                {
                    nome: "Projeto Calculadora",
                    descricao: "Calculadora funcional desenvolvida como projeto avaliativo da faculdade.",
                    funcao: "Desenvolvedor",
                    tecnologias: ["HTML", "CSS", "JavaScript"],
                    url: "https://github.com/JeanMichelz007/calculadoraprojeto",
                    dataInicio: "2026-09-01",
                    dataFim: "2026-09-20"
                },
                {
                    nome: "Sistema de Desconto e Compras",
                    descricao: "Aplicação para entrada de dados e cálculo automático de descontos em compras utilizando manipulação do DOM.",
                    funcao: "Desenvolvedor",
                    tecnologias: ["HTML", "CSS", "JavaScript"],
                    url: "https://github.com/JeanMichelz007/descontotrabalho",
                    dataInicio: "2026-10-01",
                    dataFim: "2026-10-25"
                }
            ],

            cursos: [],

            informacoesAdicionais: {
                disponibilidade: "Meio período (Estágio)",
                modeloDeTrabalho: "Presencial ou Híbrido",
                disponibilidadeParaViagens: false,

                observacoesAdicionais: "Em busca da primeira oportunidade de estágio na área de tecnologia para aplicar os conhecimentos adquiridos na faculdade."
            },

            preferencias: {
                cargosDesejados: [
                    "Estagiário de Desenvolvimento Web",
                    "Estagiário de Programação",
                    "Estagiário de TI"
                ],

                setoresDesejados: [
                    "Tecnologia da Informação",
                    "Desenvolvimento de Software"
                ],

                locaisPreferidos: [
                    "Suzano - SP",
                    "Alto Tietê / Grande São Paulo",
                    "Remoto"
                ],

                modeloDeTrabalhoPreferido: "Híbrido ou Remoto"
            }
        }
    }
];

// Acessando os dados do currículo
const cv = dados[0].curriculo;
const info = cv.informacoesPessoais;

// Informações do cabeçalho
document.getElementById("fotoPerfil").src = info.fotoPerfil;
document.getElementById("nomeCompleto").textContent = info.nomeCompleto;
document.getElementById("tituloProfissional").textContent = info.tituloProfissional;

document.getElementById("metadados").textContent =
    `${cv.metadados.versao} | ${cv.metadados.idioma} | ${cv.metadados.ultimaAtualizacao}`;

// Informações pessoais
document.getElementById("informacoesPessoais").innerHTML = `
    <li><strong>E-mail:</strong> ${info.email}</li>
    <li><strong>Contato:</strong> ${info.telefone} / ${info.whatsapp}</li>
    <li><strong>Local:</strong> ${info.localizacao.cidade} - ${info.localizacao.estado}</li>
    <li><strong>GitHub:</strong> <a href="${info.github}" target="_blank" rel="noopener noreferrer">Acessar perfil</a></li>
`;

// Resumo profissional
document.getElementById("resumoProfissional").innerHTML = `
    <p>${cv.resumoProfissional.descricao}</p>
    <p><strong>Objetivo:</strong> ${cv.resumoProfissional.objetivoProfissional}</p>
`;

// Experiência profissional
const divExperiencia = document.getElementById("experienciaProfissional");

if (cv.experienciaProfissional.length === 0) {
    divExperiencia.innerHTML = "<p>Em busca da primeira oportunidade de estágio.</p>";
}

// Formação acadêmica
const divFormacao = document.getElementById("formacaoAcademica");

for (let form of cv.formacaoAcademica) {
    const card = document.createElement("article");

    const dataFim = form.atual ? "Cursando" : form.dataFim;

    card.innerHTML = `
        <h3>${form.grau} em ${form.areaDeEstudo}</h3>
        <p>${form.instituicao}</p>
        <p>${form.dataInicio} até ${dataFim}</p>
        <p>${form.descricao}</p>
    `;

    divFormacao.appendChild(card);
}

// Habilidades
const ulHabilidades = document.getElementById("habilidades");

for (let tec of cv.habilidades.tecnicas) {
    const li = document.createElement("li");

    li.innerHTML = `<strong>${tec.nome}:</strong> ${tec.nivel}`;

    ulHabilidades.appendChild(li);
}

ulHabilidades.innerHTML += `
    <li><strong>Comportamentais:</strong> ${cv.habilidades.comportamentais.join(", ")}</li>
    <li><strong>Ferramentas:</strong> ${cv.habilidades.ferramentas.join(", ")}</li>
    <li><strong>Metodologias:</strong> ${cv.habilidades.metodologias.join(", ")}</li>
`;

// Idiomas
const ulIdiomas = document.getElementById("idiomas");

for (let idioma of cv.idiomas) {
    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${idioma.nome}:</strong> ${idioma.proficiencia}
    `;

    ulIdiomas.appendChild(li);
}

// Certificações
const divCertificacoes = document.getElementById("certificacoes");

if (cv.certificacoes.length === 0) {
    divCertificacoes.innerHTML = "<p>Nenhuma certificação cadastrada.</p>";
}

// Cursos
const ulCursos = document.getElementById("cursos");

if (cv.cursos.length === 0) {
    ulCursos.innerHTML = "<li>Nenhum curso cadastrado.</li>";
}

// Projetos
const divProjetos = document.getElementById("projetos");

for (let proj of cv.projetos) {
    const card = document.createElement("article");

    card.innerHTML = `
        <h3>${proj.nome}</h3>
        <p>${proj.descricao}</p>
        <p><strong>Função:</strong> ${proj.funcao}</p>
        <p><strong>Tecnologias:</strong> ${proj.tecnologias.join(", ")}</p>
        <a href="${proj.url}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    `;

    divProjetos.appendChild(card);
}

// Informações adicionais
document.getElementById("informacoesAdicionais").innerHTML = `
    <li><strong>Disponibilidade:</strong> ${cv.informacoesAdicionais.disponibilidade}</li>
    <li><strong>Modelo de trabalho:</strong> ${cv.informacoesAdicionais.modeloDeTrabalho}</li>
    <li><strong>Disponibilidade para viagens:</strong> ${cv.informacoesAdicionais.disponibilidadeParaViagens ? "Sim" : "Não"}</li>
    <li>${cv.informacoesAdicionais.observacoesAdicionais}</li>
`;

// Preferências
document.getElementById("preferencias").innerHTML = `
    <li><strong>Cargos desejados:</strong> ${cv.preferencias.cargosDesejados.join(", ")}</li>
    <li><strong>Setores desejados:</strong> ${cv.preferencias.setoresDesejados.join(", ")}</li>
    <li><strong>Locais preferidos:</strong> ${cv.preferencias.locaisPreferidos.join(", ")}</li>
    <li><strong>Modelo de trabalho:</strong> ${cv.preferencias.modeloDeTrabalhoPreferido}</li>
`;

