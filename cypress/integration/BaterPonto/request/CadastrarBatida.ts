import { BatidaParams } from "../../../support/entities/BatidaParams";

export class CadastrarBatida {

    public inserirPonto(batidaParams: BatidaParams){

        var json = JSON.parse(JSON.stringify(batidaParams));

        return cy.request({
            method: "POST",
            url: "v1/batidas",
            body: json,
            failOnStatusCode: false
        })
    }

}