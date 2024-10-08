# Especificações do Projeto

Nesta seção, detalhamos a definição do problema e a proposta de solução para a **NoteRepair**, uma empresa especializada em manutenção de notebooks. Utilizamos diversas técnicas, como **Personas**, **Histórias de Usuários**, **Requisitos Funcionais**, **Requisitos Não Funcionais** e **Restrições do Projeto**, para garantir que a solução proposta atenda às necessidades dos usuários e ao crescimento contínuo da NoteRepair, considerando as limitações práticas enfrentadas pela empresa. A NoteRepair, enfrentando desafios de gestão e eficiência com o aumento da demanda por serviços de manutenção, busca aprimorar seus processos internos e o atendimento ao cliente, equilibrando a conveniência para os usuários com a otimização das operações. Essas técnicas nos permitem entender melhor os perfis de usuários e suas interações com o sistema, garantindo que a solução esteja alinhada tanto com as expectativas dos clientes quanto com os objetivos de crescimento da empresa.

## Personas

### Persona 1
Nome: Rosangela Santos

- **Idade:** 19 anos
- **Profissão:** Estudante universitária
- **Conhecimento básico em informática**

**Formação Acadêmica:**
- **Graduação:** Administração em andamento
- **Nível Médio:** Completo
- **Capacitações Técnicas e Cursos Complementares:** Não possui

**Perfil Profissional:**
Rosangela é uma jovem estudante do terceiro período do curso de Administração. Ela utiliza o computador para realizar atividades da universidade. Como faz o curso à noite, atua como estagiária em uma empresa de administração de imóveis durante meio expediente. Seu dia a dia é muito atribulado, pois tem os três turnos ocupados com atividades da universidade e do seu estágio. Como é bolsista, ela tem grande responsabilidade em manter seu rendimento acadêmico para viabilizar sua permanência no curso. Sua remuneração do estágio é sua principal fonte de renda.

**Desafios Atuais:**
Rosangela utiliza seu notebook para realizar trabalhos da universidade, pesquisas e estudo. Sua principal tarefa no estágio é acompanhar os clientes através de uma plataforma web e atendê-los de forma remota, combinando trabalho presencial no escritório, acompanhamento no local dos imóveis e atendimento remoto via WhatsApp Web e a plataforma da administradora em que atua.

**Necessidades Identificadas:**
As principais necessidades de Rosangela estão relacionadas ao preço do reparo, já que tem uma renda limitada e precisa de opções acessíveis. Além disso, precisa de transparência e confiabilidade nos prazos, pois seu notebook faz parte de várias etapas importantes do seu dia a dia.

### Persona 2
Nome: Victor Hugo

- **Idade:** 22 anos
- **Profissão:** Marketing Digital
- **Estado Civil:** Casado

**Formação Acadêmica:**
- **Graduação:** Marketing

**Perfil Profissional:**
Victor trabalha com marketing digital e utiliza seu equipamento pessoal para desempenhar suas funções. Ele possui conhecimentos intermediários em tecnologia, entendendo razoavelmente sobre software, mas tem pouco conhecimento de hardware. Utiliza mais de um notebook e diversos periféricos que precisam estar sempre funcionando para garantir a continuidade do trabalho. Devido ao home office, valoriza a eficiência e a praticidade no suporte técnico.

**Desafios Atuais:**
- **Transparência:** Victor necessita de transparência no processo de manutenção de seus dispositivos, para planejar soluções temporárias.
- **Deslocamento:** Victor prefere uma assistência que possa buscar e entregar seus equipamentos em sua residência, evitando perda de tempo com deslocamentos.

**Necessidades Identificadas:**
- **Resolução de Problemas de Hardware:** Busca solucionar possíveis problemas de hardware de maneira eficiente.
- **Transparência no Processo de Manutenção:** Necessita acompanhar o andamento das manutenções para se organizar melhor.
- **Agilidade na Retirada e Entrega:** A coleta e devolução dos equipamentos é fundamental para evitar interrupções no trabalho.

### Persona 3
Nome: Chico Lopes

- **Idade:** 42 anos
- **Profissão:** Gerente
- **Empresa:** NoteRepair
- **Tempo de Experiência:** 12 anos

**Formação Acadêmica:**
- **Graduação:** Administração
- **Pós-graduação:** Liderança e Gestão de Pessoas

**Perfil Profissional:**
Chico Lopes é gerente da NoteRepair e possui vasta experiência em gestão. Ele enfrenta desafios na otimização dos processos da empresa, que não acompanharam o crescimento da demanda.

**Desafios Atuais:**
Chico busca uma solução que o auxilie a ter uma visão clara dos processos de manutenção, otimizar o fluxo de trabalho e melhorar a alocação de recursos.

### Persona 4
Nome: João Martins

- **Idade:** 35 anos
- **Profissão:** Técnico especializado em manutenção de notebooks
- **Empresa:** NoteRepair
- **Tempo de Experiência:** Mais de 10 anos

**Formação Acadêmica:**
- **Graduação:** Tecnologia da Informação
- **Curso Técnico:** Técnico em eletrônica
- **Certificações:** Certificações adicionais em reparo de hardware e software

**Perfil Profissional:**
João Martins é um técnico com mais de 10 anos de experiência, especializado na manutenção de notebooks, enfrentando desafios operacionais devido à falta de ferramentas adequadas para otimizar seu fluxo de trabalho.

## Mapa de Personas
![Mapa de Personas](./img/personas-map.png)

---

## User Stories

| User Story ID | Story | Ator Primário |
|---------------|-------|---------------|
| **US-01** | Como cliente, quero solicitar o reparo do meu notebook através da plataforma online, para evitar deslocamentos até a loja. | Cliente |
| **US-02** | Como cliente, quero acompanhar o status do meu notebook em tempo real durante o processo de reparo, para planejar melhor o dia a dia com a ausencia do aparelho eletrônico. | Cliente |
| **US-03** | Como cliente, quero receber um orçamento detalhado antes do início do reparo, para saber o custo antecipadamente e organizar meu orçamento. | Cliente |
| **US-04** | Como cliente, quero agendar a coleta e a entrega do meu notebook diretamente pela plataforma, para maior conveniência e agilidade no processo de reparo. | Cliente |
| **US-05** | Como técnico, quero poder visualizar a fila de notebooks a serem reparados, para priorizar de acordo com a urgência dos casos e maximizar a eficiência do meu tempo de trabalho. | Técnico |
| **US-06** | Como técnico, quero ter uma ferramenta que facilite a triagem dos notebooks recebidos, agilizando a identificação dos problemas e os processos de reparo. | Técnico |
| **US-07** | Como gerente, quero poder realizar o cadastro dos meus técnicos e gerenciar suas permissões dentro da plataforma, garantindo que o sistema funcione de forma segura e organizada. | Gerente |
| **US-08** | Como gerente, quero poder visualizar os status de reparo dos notebooks e a carga de trabalho de cada técnico, para otimizar a alocação de recursos e reduzir o tempo de espera dos clientes. | Gerente |

---

## Requisitos Funcionais (RF)

| ID      | Descrição do Requisito | Prioridade |
|---------|------------------------|------------|
| **RF-001** | Permitir que o usuário realize o cadastro de suas informações. | ALTA |
| **RF-002** | Facilitar a solicitação de reparo diretamente pela plataforma. | ALTA |
| **RF-003** | Fila de processamento de pedidos de reparo. | ALTA |
| **RF-004** | Gerenciar permissões para técnicos e gestores. | ALTA |
| **RF-005** | Atualizar status do notebook no fluxo de trabalho, permitindo ao cliente acompanhar cada etapa. | MÉDIA |
| **RF-006** | Relatório do status do reparo e organização das prioridades de trabalho dos técnicos. | ALTA |
| **RF-007** | Enviar emails automáticos de status do produto para consumidor, para aumentar a transparência do processo. | ALTA |
| **RF-008** | Encaminhar o orçamento para o cliente antes do início do reparo, garantindo clareza nos custos. | ALTA |
| **RF-009** | Ter interface para cadastro de técnico e gestão de permissões. | ALTA |
| **RF-010** | Consulta dos status dos notebooks em reparo por técnico, exclusivo para gerente, melhorando o gerenciamento de carga de trabalho. | MÉDIA |
| **RF-011** | Comunicação entre técnico e usuário, permitindo que o técnico forneça atualizações em tempo real. | ALTA |

---

## Requisitos Não Funcionais (RNF)

| ID      | Descrição do Requisito | Prioridade |
|---------|------------------------|------------|
| **RNF-001** | O sistema deve ser responsivo e acessível em dispositivos móveis, facilitando o acesso a partir de qualquer lugar. | ALTA |
| **RNF-002** | O sistema deve processar requisições de usuário em no máximo 5 segundos, garantindo eficiência na utilização da plataforma. | MÉDIA |
| **RNF-003** | O sistema deve ser escalável para suportar aumento de demanda sem comprometer o desempenho. | MÉDIA |
| **RNF-004** | O sistema deve ter alta disponibilidade, com uptime mínimo de 99%, para garantir confiabilidade aos usuários. | ALTA |
| **RNF-005** | A plataforma deve ter um design intuitivo, focado em experiência do usuário e acessibilidade. | ALTA |
| **RNF-006** | O sistema deve suportar auditoria completa de todas as ações realizadas, para fins de rastreamento e segurança. | MÉDIA |
| **RNF-007** | Interface para usuário, garantindo uma experiência de fácil uso e acesso às informações necessárias. | ALTA |
| **RNF-008** | Interface para gerente, oferecendo uma visão geral dos processos e status de trabalho da equipe. | ALTA |
| **RNF-009** | Interface para técnico, facilitando a organização de suas tarefas diárias. | ALTA |
| **RNF-010** | Implementar e obdecer as legislações vigente da Lei Geral de Proteção dos Dados (LGPD). | ALTA |

---

## Restrições

| ID  | Restrição |
|-----|-----------|
| **01** | O projeto deverá ser entregue até o final do semestre, sendo código aberto e amplamente documentado utilizando o GitHub. |
| **02** | O sistema não pode operar sem conexão com a internet (é necessário estar online). |
| **03** | Não será permitido utilizar tecnologias não compatíveis com dispositivos móveis. |
| **04** | O desenvolvimento é único e exclusivamente através de plataforma web, não havendo a possibilidade de desenvolver um aplicativo. |
| **05** | O sistema não pode armazenar ou manipular um banco de dados próprio; deve integrar-se a sistemas externos. |
