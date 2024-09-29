# Documento de Interface - NoteRepair

Este documento descreve as principais interfaces da plataforma *NoteRepair*, que é destinada à gestão de reparos de notebooks. A seguir, são apresentados os fluxos e telas que compõem o sistema, desde o acesso inicial até o gerenciamento de pedidos, colaboradores e comunicação com clientes.

## User Flow

O *user flow* representa o caminho que cada tipo de usuário percorre dentro da plataforma *NoteRepair*. Ele está dividido em três principais categorias: Gerente, Cliente e Técnico, com cada um acessando funcionalidades específicas para suas necessidades.

### Gerente

O gerente tem o papel de supervisionar a equipe técnica, gerar relatórios e acompanhar o andamento dos pedidos de reparo. Ele pode:
- Cadastrar e gerenciar técnicos.
- Acompanhar a fila de pedidos de reparo e verificar as informações detalhadas de cada um.
- Gerar relatórios financeiros e de reparos.
- Controlar as permissões dos colaboradores.

### Cliente

O cliente utiliza a plataforma para acompanhar o status dos reparos solicitados e criar novas solicitações. As funcionalidades principais incluem:
- Visualizar a lista de reparos solicitados e acompanhar o status de cada um.
- Criar novas solicitações de reparo, fornecendo informações detalhadas sobre o equipamento.
- Comunicar-se com o técnico responsável pelo reparo através de um chat.

### Técnico

Os técnicos podem visualizar a fila de reparos e atualizar o status dos serviços. Suas principais responsabilidades são:
- Acessar a lista de reparos.
- Atualizar o status de um reparo específico (Em Análise, Manutenção, Enviado).
- Comunicar-se com os clientes via chat.

### Diagrama do User Flow

![User Flow](UserFlow.png)

---

## Interface - Página Inicial do Gerente

Esta é a página inicial acessada pelo gerente. Ela contém diversas funcionalidades relacionadas ao gerenciamento de colaboradores, supervisão da fila de pedidos e emissão de relatórios. O gerente tem controle completo sobre os técnicos e pode visualizar o progresso de cada reparo.

- **Cadastro e Gerenciamento de Colaboradores:** O gerente pode adicionar novos técnicos e gerenciar suas permissões.
- **Fila de Processamento de Pedidos:** O gerente pode visualizar todos os pedidos de reparo em andamento e acessar informações detalhadas sobre cada um.
- **Emissão de Relatórios:** O gerente pode gerar relatórios sobre finanças, reparos e transações, com opção de exportação em PDF ou XLS.

![Página Inicial do Gerente](Pagina_Inicial_Gerente.png)

---

## Interface - Página Inicial do Cliente

Nesta página, os clientes têm acesso às informações sobre seus pedidos de reparo. Eles podem acompanhar o status dos reparos, acessar detalhes específicos e criar novas solicitações de reparo.

- **Listagem de Reparo Solicitado:** O cliente pode visualizar todos os reparos solicitados e o status atual de cada um.
- **Criação de Solicitação de Reparo:** O cliente pode preencher um formulário com detalhes sobre o dispositivo e o problema enfrentado.

![Página Inicial do Cliente](Pagina_Inicial_Cliente.png)

---

## Interface - Fila de Processamento de Pedidos

Esta página é acessada tanto pelos técnicos quanto pelos gerentes. Ela apresenta a lista de todos os pedidos de reparo em andamento, com detalhes como cliente, data de criação, status atual e o técnico responsável. A partir desta tela, o gerente ou o técnico pode editar o pedido ou acessar detalhes mais específicos.

- **Pedidos em Andamento:** Visualização dos pedidos com opções de filtragem e edição.
- **Ações Disponíveis:** Visualizar detalhes, editar ou mudar o status do reparo.

![Fila de Processamento de Pedidos](Fila_de_Processamento_de_Pedidos.png)

---

## Interface - Relatórios

A página de relatórios permite ao gerente gerar, visualizar e exportar relatórios detalhados sobre os processos de reparo, o desempenho financeiro da empresa e as transações realizadas. Há três tipos principais de relatórios que podem ser gerados: financeiros, de reparo e transações.

- **Tipos de Relatório:** Finanças, reparos, e transações.
- **Exportação:** PDF e XLS disponíveis para download.
- **Criação de Relatórios:** Formulário para criar novos relatórios com detalhes como status, responsável e tipo de relatório.

![Página de Relatórios](Pagina_de_Relatorios.png)

---

## Interface - Pedido de Orçamento

Nesta interface, o cliente pode solicitar um orçamento para o reparo do dispositivo. O formulário inclui campos para a marca, modelo e uma descrição do problema, além de endereços de coleta e entrega do equipamento.

- **Descrição do Problema:** O cliente deve fornecer detalhes sobre o defeito do dispositivo.
- **Endereços:** Campos para inserir o endereço de coleta e entrega.

![Pedido de Orçamento](Pedido_de_Orcamento.png)

---

## Interface - Status do Reparo

A página de status do reparo exibe o progresso do serviço em andamento, mostrando as etapas "Em Análise", "Manutenção" e "Enviado". Além disso, há uma funcionalidade de chat, onde o cliente pode se comunicar diretamente com o técnico responsável, tirar dúvidas e negociar valores ou prazos.

- **Gráfico de Progresso:** Representação visual do status do reparo.
- **Chat:** Canal de comunicação entre cliente e técnico.
- **Orçamento:** Detalhamento do valor estimado para o reparo.

![Status do Reparo](Status_do_Reparo.png)

---

## Interface - Gerenciamento de Colaboradores

Nesta página, o gerente pode adicionar, editar ou remover colaboradores (técnicos) da plataforma. Ele também pode alterar as permissões dos colaboradores, designando quem será técnico ou quem terá acesso de gerente.

- **Adicionar Colaboradores:** Formulário para incluir novos membros à equipe.
- **Permissões:** Controle sobre as permissões de cada colaborador.

![Gerenciamento de Colaboradores](Gerenciamento_de_Colaboradores.png)

---

## Interface - Chat com Técnico

Essa funcionalidade permite que o cliente e o técnico se comuniquem diretamente. Através do chat, o técnico pode informar o progresso do reparo, negociar orçamentos e esclarecer dúvidas.

- **Comunicação Direta:** Chat em tempo real entre cliente e técnico.
- **Atualização de Status:** O técnico pode atualizar o status do reparo diretamente da conversa.

![Chat com Técnico](Chat_com_Tecnico.png)

---

## Interface - Detalhes do Reparo

Nesta página, os técnicos podem visualizar todos os detalhes de um pedido de reparo específico, incluindo informações do cliente, equipamento e endereço. Eles também podem atualizar o status do reparo e enviar relatórios ao gerente.

- **Informações Detalhadas:** Visualização do problema relatado, endereço e contato do cliente.
- **Atualização de Status:** Possibilidade de alterar o status do reparo.

![Detalhes do Reparo](Detalhes_do_Reparo.png)

---



