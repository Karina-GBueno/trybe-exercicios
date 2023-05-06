# SEÇÃO - Unix, Shell e Git

# DIA - 2

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre como instalar e configurar o Git no meu computador, como salvar os projetos no repositório Git local, e como controlar as alterações e versões dos meus arquivos.

Os requisitos do exercício são:

### PRIMEIRA PARTE
1. Crie uma pasta em seu computador;
2. Acesse a pasta que você acabou de criar;
3. Inicie o versionamento por meio do comando git init;
4. Abra a pasta no VS Code por meio do comando code .;
5. Crie um arquivo chamado README.md;
6. Adicione o arquivo novo em staging e realize um commit, como em git add . e git commit -m "Descreva a alteração realizada";
7. Crie uma nova branch por meio do comando git checkout -b, como em git checkout -b adiciona-readme;
8. Faça uma alteração em README.md e, depois, realize um novo commit, como em git add . e git commit -m "Alterando o README";
9. Retorne para a branch main e, em seguida, realize o merge das alterações por meio do comando git merge nome-da-branch, como em git merge adiciona-readme.

### SEGUNDA PARTE
1. Acesse a branch main e crie uma branch nova chamada atualiza-readme.
2. Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt.
3. Adicione as alterações em staging e realize um commit.
4. Adicione seu nome e sobrenome ao arquivo infos.txt.
5. Adicione novamente as alterações em staging e realize um commit.
6. Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos.
7. Adicione as alterações em staging e realize o commit.
8. Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos.
9. Retorne para a branch main e realize o merge das alterações.