///<reference types = "cypress"/>
import { getRandomNumber } from "../../../support/functions/randomNumber";
import { BatidaParams } from "../../../support/entities/BatidaParams";
import { CadastrarBatida } from "../request/CadastrarBatida";

describe("Registrar Horarios", () => {
  const randomMonth = getRandomNumber(1, 12);
  const randomDay = getRandomNumber(1, 20);

  it("Batida 1", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "08:15:11";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.dia).to.be.equal(dia);
      expect(response.body.horarios.length).to.be.equal(1);
    });
  });

  it("Batida 2", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "12:15:11";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.dia).to.be.equal(dia);
      expect(response.body.horarios.length).to.be.equal(2);
    });
  });

  it("Batida 3 - Menos de uma hora de almoço", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "12:15:10";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(403);
      expect(response.body.mensagem).to.be.equal(
        "Deve haver no mínimo 1 hora de almoço"
      );
    });
  });

  it("Batida 3", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "13:20:30";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.dia).to.be.equal(dia);
      expect(response.body.horarios.length).to.be.equal(3);
    });
  });

  it("Batida 4", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "18:21:32";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.dia).to.be.equal(dia);
      expect(response.body.horarios.length).to.be.equal(4);
    });
  });

  it("Batida 5 - Só deve registrar 4 por dia", () => {
    let dia: string = `2018-${randomMonth}-${randomDay}`;
    let horario: string = "20:21:32";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(403);
      expect(response.body.mensagem).to.be.equal(
        "Apenas 4 horários podem ser registrados por dia"
      );
    });
  });

  it("Não pode fazer ponto no final de semana", () => {
    let dia: string = "2022-08-13";
    let horario: string = "08:21:32";
    let batidaParams: BatidaParams = new BatidaParams();
    batidaParams.dataHora = `${dia}T${horario}`;

    new CadastrarBatida().inserirPonto(batidaParams).then((response) => {
      expect(response.status).to.be.equal(403);
      expect(response.body.mensagem).to.be.equal(
        "Sábado e domingo não são permitidos como dia de trabalho"
      );
    });
  });

  // it("Campo informado em formato invalido", () => {
  //   let dia: string = "2022-08-13";
  //   let horario: string = "08:21:32";
  //   const parametrosInvalidos = {
  //     teste: `${dia}T${horario}`,
  //   };

  //   new CadastrarBatida().inserirPonto(parametrosInvalidos).then((response) => {
  //     expect(response.status).to.be.equal(400);
  //     expect(response.body.message).to.be.equal(
  //       "Campo obrigatório não informado"
  //     );
  //   });
  // });
});
