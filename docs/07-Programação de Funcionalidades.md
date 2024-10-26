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

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Nome           | Texto             | Nome do Usuário                           | João Silva                                     |           | Tipo de usuário| Texto             | Definição do usuário entre cliente, técnico e gerente | Cliente                            |
| Senha          | Texto             | Senha secreta do usuário                  | abc123                                         | 
| E-mail         | Texto             | Email do cliente                          | joaosilva@noterepair.com                       |

## Orçamento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do orçamento| Numero (Inteiro)  | Identificador único do orçamento          | 16                                             |
| Marca          | Texto             | Marca do notebook                         | Dell                                           |
| Modelo         | Texto             | Modelo do notebook                        | XPS15                                          |
| Coleta CEP     | Texto             | CEP do endereço de coleta                 | 35400000                                       |
| Coleta Bairro  | Texto             | Bairro do endereço de coleta do notebook  | Centro                                         |
| Coleta Logradouro | Texto          | Endereço de coleta com rua e número       | Rua A, 33                                      |
| Coleta Complemento| Texto          | Informação complementar do endereço como ponto de referência ou condomínio etc. | Casa ao lado da Oi |
| Mesmo da coleta | booleano         | Checkbox para repetição do endereço       | FALSE                                          |
| Entrega CEP     | Texto            | CEP do endereço de entrega                | 35400000                                       |
| Entrega Bairro  | Texto            | Bairro do endereço de entrega do notebook | Centro                                         |
| Entrega Logradouro | Texto         | Endereço de entrega com rua e número      | Rua A, 33                                      |
| Entrega Complemento| Texto         | Informação complementar do endereço como ponto de referência ou condomínio etc. | Casa ao lado da Oi |
| Data e Hora      | timestamp       | Registro de data e hora feito a partir do acionamento do botão enviar orçamento | 01/12/24; 23h45 |

## Chat
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do cliente  | Numero (Inteiro)  | Identificador único do cliente            | 1                                              |
| Id do técnico  | Numero (Inteiro)  | Identificador único do técnico            | 5                                              |
| Id da conversa | Numero (Inteiro)  | Identificador único da conversa           | 18                                             |
| Id da mensagem | Numero (Inteiro)  | Identificador único da mensagem           | 178                                            |
| Texto da mensagem | Texto          | Texto da mensagem redigida pelo cliente ou pelo técnico| Olá, boa tarde                    |
| Data e Hora    | timestamp         | Registro da data e hora do envio da mensagem | 01/12/24; 23h45                             |
| Id do orçamento| Numero (Inteiro)  | Identificador do orçamento                 | 189                                           |
