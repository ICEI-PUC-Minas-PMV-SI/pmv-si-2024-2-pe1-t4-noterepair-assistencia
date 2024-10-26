# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir que o usuário realize o cadastro de suas informações. | João / Marcos | home.html |
|RF-002| Facilitar a solicitação de reparo diretamente pela plataforma. | Marcelo | Pedidodeorcamento.html |
|RF-003| Fila de processamento de pedidos de reparo. | Amanda | Lista de Reparos - Técnico.html |
|RF-004| Gerenciar permissões para técnicos e gestores. | João | cadastro_gerenciamento.html |
|RF-005| Atualizar status do notebook no fluxo de trabalho, permitindo ao cliente acompanhar cada etapa. | Amanda | Status do Reparo + Chat - Técnico.html |
|RF-006| Relatório do status do reparo e organização das prioridades de trabalho dos técnicos. | Ryan | relatorios.html |
|RF-007|Enviar emails automáticos de status do produto para consumidor, para aumentar a transparência do processo. | Amanda | Status do Reparo + Chat - Técnico.html |
|RF-008| Encaminhar o orçamento para o cliente antes do início do reparo, garantindo clareza nos custos. | Amanda | Status do Reparo + Chat - Técnico.html |
|RF-009| Ter interface para cadastro de técnico e gestão de permissões. | João | cadastro_gerenciamento.html |
|RF-010| Consulta dos status dos notebooks em reparo por técnico, exclusivo para gerente, melhorando o gerenciamento de carga de trabalho. |Ryan | fila_de_processamento_de_pedido.html |
|RF-011| Comunicação entre técnico e usuário, permitindo que o técnico forneça atualizações em tempo real. | Amanda | Status do Reparo + Chat - Técnico.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |
