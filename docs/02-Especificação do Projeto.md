# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Persona 2

Nome: Victor Hugo

Idade: 22 anos

Profissão: Marketing Digital

Estado Civil: Casado

#### Formação Acadêmica:

#### Graduação: Marketing


#### Perfil Profissional:
Victor trabalha com marketing digital, utilizando seu equipamento pessoal também para o trabalho. Apesar de entender razoavelmente sobre software, porque utiliza o computador diariamente para trabalhar, não tem muito conhecimento de hardware. Por isso, vez ou outra, precisa de suporte para seu equipamento.

#### Desafios Atuais:
Como trabalha com marketing digital, utiliza mais de um notebook e diversos periféricos, que precisam estar sempre funcionando. Para ele, é importante ter transparência em relação a todo o processo de manutenção, pois assim consegue planejar soluções temporárias quando um de seus notebooks está na assistência.

Além disso, ele trabalha em modelo home office, ficando ocupado durante todo horário comercial, então ter uma assistência que possa buscar seu equipamento em sua residência e depois devolvê-lo facilita para que ele não perca horas de trabalho se deslocando até uma assistência.

#### Necessidades Identificadas:
Resolver possíveis problemas envolvendo o hardware de seus notebooks pessoais, ter transparência no processo de manutenção e agilidade na retirada e entrega.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

Aqui estão as tabelas de requisitos funcionais e não funcionais com base no que foi discutido até agora:

#### Requisitos Funcionais (RF)

| ID     | Descrição do Requisito                                               | Prioridade |
|--------|----------------------------------------------------------------------|------------|
| RF-001 | Permitir que o usuário realize o cadastro de suas informações         | ALTA       |
| RF-002 | Facilitar a solicitação de reparo diretamente pela plataforma         | ALTA       |
| RF-003 | Automatizar o processamento de pedidos de reparo                     | ALTA       |
| RF-004 | Gerenciar permissões para técnicos e gestores                        | ALTA       |
| RF-005 | Emitir relatórios sobre o fluxo de trabalho                          | MÉDIA      |
| RF-006 | Integrar procedimento de transporte do notebook e logística para coleta e entrega | ALTA       |
| RF-007 | Manter comunicação ativa com o cliente durante o processo de reparo   | MÉDIA      |
| RF-008 | Facilitar o encaminhamento do orçamento                              | ALTA       |
| RF-009 | Facilitar a emissão de notas fiscais                                 | BAIXA      |

**Requisitos Funcionais (RF):** correspondem a uma funcionalidade que deve estar presente na plataforma (ex: cadastro de usuário).

### Requisitos Não Funcionais (RNF)

| ID     | Descrição do Requisito                                                | Prioridade |
|--------|-----------------------------------------------------------------------|------------|
| RNF-001| O sistema deve ser responsivo e acessível em dispositivos móveis       | ALTA       |
| RNF-002| O sistema deve processar requisições de usuário em no máximo 5 segundos| BAIXA      |
| RNF-004| O sistema deve ser escalável para suportar aumento de demanda          | BAIXA      |
| RNF-005| O sistema deve ter alta disponibilidade, com uptime mínimo de 99%      | ALTA       |
| RNF-006| A plataforma deve ter um design intuitivo, focado em experiência do usuário | ALTA  |
| RNF-007| O sistema deve suportar auditoria completa de todas as ações realizadas| MÉDIA      |

**Requisitos Não Funcionais (RNF):** correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a dispositivos iOS e Android). Lembre-se que cada requisito deve corresponder a uma e somente uma característica alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.

### Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID   | Restrição                                                                                                          |
|------|--------------------------------------------------------------------------------------------------------------------|
| 01   | O projeto deverá ser entregue até o final do semestre, sendo código aberto e amplamente documentado utilizando o GitHub. |
| 02   | Não pode ser desenvolvido um módulo de backend próprio (deve usar APIs existentes).                                |
| 03   | O sistema não pode operar sem conexão com a internet (é necessário estar online).                                  |
| 04   | Não será permitido utilizar tecnologias não compatíveis com dispositivos móveis.                                   |
| 05   | O desenvolvimento é único e exclusivamente através de plataforma web, não havendo a possibilidade de desenvolver um aplicativo. |
| 06   | O sistema não pode armazenar ou manipular um banco de dados.                                                       |

## Diagrama de Contexto

![Diagrama sem nome](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe1-t4-noterepair-assistencia/blob/main/docs/img/Diagrama%20sem%20nome-1724801870840.drawio.png?raw=true)
