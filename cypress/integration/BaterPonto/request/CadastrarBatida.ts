export class CadastrarBatida {
  public inserirPonto(batidaParams: any) {
    var json = JSON.parse(JSON.stringify(batidaParams));

    return cy.request({
      method: "POST",
      url: "v1/batidas",
      body: json,
      failOnStatusCode: false,
    });
  }
}
