DESAFIO QA BEEDOO 2025

Módulo: Gestão de Cursos

Decisões para criação das User Stories

- Analisei a funcionalidade de criação e exclusão de cursos
- Identifiquei os usuários envolvidos (Admin)
- Foquei em fluxos principais e alternativos
- Considerei validações de frontend e backend
- Priorizei cenários que impactam a experiência do usuário final

User Stories

US001 - Criar Curso - Teste Manual e automatizado
Como administrador
Quero criar um novo curso com dados válidos
Para que os alunos possam se matricular

Critérios de Aceitação:
- Deve validar campos obrigatórios (título, descrição, categoria)
- Deve exibir mensagem de sucesso
- Não deve permitir cursos duplicados


US002 - Excluir Curso
Como administrador
Quero excluir um curso existente
Para remover cursos desatualizados ou duplicados

Critérios de Aceitação:
-Deve exibir confirmação antes da exclusão
- Deve remover curso permanentemente do sistema
- Deve exibir mensagem de sucesso após exclusão
- Deve atualizar a listagem após exclusão
-  Não deve permitir exclusão acidental (sem confirmação)
-  Deve manter cursos relacionados (matrículas) consistentes


US00 3 Criar Curso com Data de Início
Como administrador
Quero definir data de início para um curso
Para organizar o calendário acadêmico

Critérios de Aceitação:
- Deve permitir criação sem data de início (campo opcional)
- Deve aceitar datas futuras válidas
- Não deve aceitar datas passadas
- Deve validar formato da data
- Deve exibir data corretamente na listagem

US004 - Criar Curso em Diferentes Modalidades
Como administrador
Quero criar cursos nas modalidades Online OU Presencial
Para atender diferentes necessidades dos alunos

Critérios de Aceitação:
- Deve permitir seleção entre Online e Presencial
- Deve exibir campos específicos para cada modalidade
- Para Online: deve solicitar link de acesso
- Deve salvar modalidade corretamente

------Cenário de Testes-----


US001 - CRIAR CURSO
CT001 - Criar Curso com Dados Válidos (Sucesso)
Pré-condição: Usuário logado na plataforma

Passos:

Acessar https://creative-sherbet-a51eac.netlify.app/

Fazer login com credenciais válidas (se necessário)

Clicar no botão "Novo Curso" 

Preencher campo "Título": "Curso de Teste Automatizado"

Preencher campo "Descrição": "Aprenda testes automatizados do zero ao avançado"


Clicar no botão "Cadastrar Curso"

Aguardar processamento

Resultado Esperado:

Sistema exibe mensagem "Curso criado com sucesso"

Curso aparece na listagem principal

Redireciona para página de cursos ou mantém na criação


US002 - EXCLUIR CURSO
CT004 - Excluir Curso com Confirmação (Sucesso)
Pré-condição: Curso "Curso para Excluir" existe na listagem

Passos:

Na tela principal, localizar o curso "Curso para Excluir"

Clicar no curso para selecionar

Clicar no ícone de lixeira 🗑️ ou "Excluir"

Na modal de confirmação, verificar mensagem "Tem certeza que deseja excluir?"

Clicar no botão "Sim" ou "Confirmar"

Aguardar processamento

Resultado Esperado:

Modal de confirmação é exibido

Curso desaparece da listagem

Mensagem "Curso excluído com sucesso" é exibida


- CRIAR CURSO COM DATA DE INÍCIO
- Criar Curso sem Data de Início
Pré-condição: Usuário logado, na tela de criação

Passos:

Clicar em "Novo Curso"

Preencher "Título": "Curso sem Data Definida"

Preencher "Descrição": "Curso com data a ser marcada"

Selecionar "Categoria": "Gestão"

Manter campo "Data de Início" vazio ou não preencher

Clicar em "Criar"

Resultado Esperado:

Curso é criado com sucesso

Na listagem, data aparece como "Não definida" ou em branco

Mensagem de sucesso é exibida


 
- Criar Curso Modalidade Online com Link de Acesso
Pré-condição: Usuário logado na plataforma, na tela de criação de curso

Passos:

Clicar no botão "Cadastrador curso" 

Preencher campo "Nome do Curso": "Curso Online de Marketing Digital"

Preencher campo "Descrição": "Aprenda estratégias de marketing digital"


No campo "Tipo Curso", selecionar opção "Online"


Clicar cadastrar curso

Aparecer mensagem de cadastro realizado com sucesso





