import Funcionario from './Funcionario.js';

import departamento from "../herancaUtil/departamento";
import funcionarioMock from "../herancaUtil/funcionarioMock";

const funcionario = new Funcionario(funcionarioMock.nome)

test(`deve retornar nome do funcionário`, () => {
    expect(funcionario.nome).toBe(funcionarioMock.nome);
})

test(`deve retornar departamento do funcionário`, () => {
    expect(funcionario.departamento).toBe(departamento.GERAL);
})

test(`deve retornar especialidade default do funcionario`, () => {
    expect(funcionario.especialidade).toBe("especialidade");
})

describe('propriedade __proto__ da cadeia de prototypes', () => {
    test(`funcionario com 1 propriedade __proto__`, () => {
        expect(funcionario.__proto__).toBe(Funcionario.prototype);
    })

    test(`funcionario com 2 propriedades __proto__`, () => {
        expect(funcionario.__proto__.__proto__).toBe(Object.prototype);
    })

    test(`funcionario com 3 propriedades __proto__`, () => {
        expect(funcionario.__proto__.__proto__.__proto__).toBe(null);
    })
})