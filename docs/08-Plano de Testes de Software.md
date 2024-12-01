# Testes

# Teste de Software

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta e realizar login**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial <br> 2) Clique em Cadastro <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar" <br> 4) Feche o modal <br> 5) Clique em Login <br> 6) Preencha o formulário <br> 7) Clique em "Entrar" 
**Requisitos associados** | RF-001
**Resultado esperado** | Cadastro e Login realizado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Listagem de Reparos**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página <br> 2) Consulte os dados <br> 
**Requisitos associados** | RF-003
**Resultado esperado** | Listagem correta
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Status do Reparo (Cliente)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de listagem de reparo <br> 2) Clique no ícone do "i" <br> 3) Consulte os detalhes e o chat 
**Requisitos associados** | RF-005 - RF-011
**Resultado esperado** | Consulta dos dados específicos de um reparo
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Status do Reparo (Técnico)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de listagem de reparo <br> 2) Clique no ícone do "i" <br> 3) Consulte os detalhes, chat e adição de orçamento (detalhes e valor)
**Requisitos associados** | RF-008 - RF-011
**Resultado esperado** | Consulta dos dados específicos de um reparo
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Adicionar, editar e deletar novo colaborador**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de cadastro e gerenciamento <br> 2) Clique em "Novo colaborador" <br> 3) Preencha o formulário de cadastro <br> 4) Clique em "cadastrar" <br> 5) Feche o modal <br> 6) Clique em editar, edite o email <br> 7) Salve as alterações <br> 8) Remova o usuário recém cadastrado
**Requisitos associados** | RF-009
**Resultado esperado** | Cadastro, edição e remoção de funcionários (técnicos ou gestores)
**Dados de entrada** | Dados no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Fila de Processamento**
 :--------------: | ------------
**Procedimento**  | 1) Consulte a fila de processamento de pedidos <br> 2) Valide os dados na tabela <br> 3) Altere o status <br> 4) Acesse o modal de detalhamento, clicando no "i" <br> 5) Acesso o modal de edição, clicando no ícone do lápis <br> 6) Remova um dos registros
**Requisitos associados** | RF-010
**Resultado esperado** | Consulta, edição e delecão de reparo pre-existente
**Dados de entrada** | Dados no formulários
**Resultado obtido** | Sucesso


**Caso de Teste** | **CT07 - Relatórios**
 :--------------: | ------------
**Procedimento**  | 1) Consulte a página de relatórios <br> 2) Valide os dados na tabela <br> 3) Altere o status <br> 4) Acesse o modal de detalhamento, clicando no "i" <br> 5) Acesso o modal de edição, clicando no ícone do lápis <br> 6) Remova um dos registros
**Requisitos associados** | RF-006
**Resultado esperado** | Consulta, edição e delecão de relatórios pre-existente
**Dados de entrada** | Dados no formulários
**Resultado obtido** | Sucesso


## Registro dos Testes de Software


|*Caso de Teste*                                 |*CT01 - Criar conta e realizar login*                                       |
|---|---|
|Requisito Associado | RF-001 - Permitir que o usuário realize o cadastro de suas informações.|
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EVQpxWS7MFFLlHpeCJFL2fcBKb3DycdDfqkvONtLaL_ReQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=pTdKQf)| 

|*Caso de Teste*                                 |*CT02 - Listagem de Reparos*                                        |
|---|---|
|Requisito Associado | RF-003 - Fila de processamento de pedidos de reparo.|
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EYHFwIMiRFFNtiH7JNi41BoB45HWcVBM_R_xQcGiSeXalA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=gWmtPW) | 

|*Caso de Teste*                                 |*CT03 - Status do Reparo (Cliente)*                                        |
|---|---|
|Requisito Associado | RF-005 - Atualizar status do notebook no fluxo de trabalho, permitindo ao cliente acompanhar cada etapa. + RF-011 - Comunicação entre técnico e usuário, permitindo que o técnico forneça atualizações em tempo real.|
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EWW_LNkUmZ1Pt68UWJD7mFgBFZ0v2RqT0z6aciavKWmbuA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=629KBA) | 

|*Caso de Teste*                                 |*CT04 - Status do Reparo (Técnico)*                                        |
|---|---|
|Requisito Associado | RF-008 - Encaminhar o orçamento para o cliente antes do início do reparo, garantindo clareza nos custos. + RF-011 - Comunicação entre técnico e usuário, permitindo que o técnico forneça atualizações em tempo real.|
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EWW_LNkUmZ1Pt68UWJD7mFgBFZ0v2RqT0z6aciavKWmbuA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=629KBA) | 

|*Caso de Teste*                                 |*CT05 - Adicionar, editar e deletar novo colaborador*                                        |
|---|---|
|Requisito Associado | RF-009 - Ter interface para cadastro de técnico e gestão de permissões. |
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EajmZ6IsZcFNq-awjfjyFqMB_Mc0U52W2iyHds80XKB_AQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=MFPKZK) | 

|*Caso de Teste*                                 |*CT06 - Fila de Processamento*                                        |
|---|---|
|Requisito Associado | RF-010 - Consulta dos status dos notebooks em reparo por técnico, exclusivo para gerente, melhorando o gerenciamento de carga de trabalho |
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EV9CmNx29Z9Nun08RVP5A_UBtaYqSiwMpp-7HF4mB1Sgug&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=pckEzH) | 

|*Caso de Teste*                                 |*CT07 - Relatórios*                                        |
|---|---|
|Requisito Associado | RF-006 - Relatório do status do reparo e organização das prioridades de trabalho dos técnicos. |
|Link do vídeo do teste realizado: | [Vídeo](https://sgapucminasbr-my.sharepoint.com/personal/1572021_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EQr3zhvzmvFPqj2KwcMbt8YBzPe0BCsUUMygO74F2fHf0g&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Jvqp0D) | 



## Avaliação dos Testes de Software

Resultados:
- Pontos fortes: A aplicação demonstrou alta performance em [Funcionalidade 1] e [Funcionalidade 2]. A interface do usuário é intuitiva e fácil de navegar.
- Pontos fracos: Foram identificadas algumas pequenas falhas, como a ausência de feedback ao usuário após o envio de formulários e a falta de limpeza dos campos após o envio.
    - Falhas detectadas:
    - Falta de feedback: O usuário não recebia nenhuma confirmação após enviar um formulário, o que gerava incerteza sobre o sucesso da operação.
    - Formulários não limpos: Após o envio de um formulário, os campos não eram limpos automaticamente, exigindo que o usuário os limpasse manualmente.
- Melhorias: As falhas identificadas foram corrigidas.

De forma geral, a aplicação apresentou resultados satisfatórios, demonstrando um alto nível de qualidade. As pequenas falhas identificadas foram rapidamente corrigidas, garantindo uma experiência de usuário mais fluida e intuitiva.

# Testes de Usabilidade

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é um cliente que deseja realizar o cadastro e acessar os detalhes de um reparo |
| 2             | Você é um técnico e precisa atualizar o orçamento de um reparo e avançar uma etapa do processo |
| 3             | Você é um gestor e deseja alterar o status de um relatório |



## Registro de Testes de Usabilidade

Você é um cliente que deseja realizar o cadastro e acessar os detalhes de um reparo

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 1 minuto e 13 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 3                | 1 minuto e 13 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 40 segundos |


    Comentários dos usuários: Cadastrar e ter que fazer login na sequência não é bom e o ícone de detalhes não é muito intuitivo.


Cenário 2: Você é um técnico e precisa atualizar o orçamento de um reparo e avançar uma etapa do processo.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 43 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4                | 43 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 28 segundos |


    Comentários dos usuários: Mais fácil que o cenário anterior, mais intuitivo, mas ainda assim não é 100% agradável.

    
Cenário 3: Você é um gestor e deseja alterar o status de um relatório

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 20 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 20 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |


    Comentários dos usuários: Sentiu que com pouco tempo foi fácil de entender o site.


## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso. Demonstrando uma curva de aprendizado curta, mas trabalhosa no início da aplicação, não sendo intuitiva out-of-the-box.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

O tempo se manteve relativamente baixo nas tarefas, no entanto, algumas reclamações como não realizar o login após o cadastro foram fatores que aumentaram o tempo de conclusão e que não são necessários.

