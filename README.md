# Instalar dependencias:
rodar o comando: ```npm install```

# Configurações iniciais:
*   Rodar o projeto Spring;
*   Caso seja necessário trocar a porta em que o projeto está rodando, ir no arquivo "cypress.json" e alterar a URL base do projeto. Não é necessário fazer o mesmo para os endpoints.

# Rodar o projeto:

rodar o comando: ```npx cypress open```. Com isso irá abrir esse menu do cypress. Clicando sobre o teste (contem o nome "spec.ts"), irá abrir uma janela do chrome e vai começar a executar os testes.
<img src="files\Menu_cypress.png"> 


# Verificando os resultados:

Casos de sucesso, tudo verde:
<img src="files\exemplo_rodando_testes.png">

Casos de erro, explica o erro:
<img src="files\falha_teste.png">

