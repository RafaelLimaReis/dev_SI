"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contaespecial_1 = require("./contaespecial");
var contacorrente_1 = require("./contacorrente");
/** instancia de ContaCorrente */
var _contaCorrente = new contacorrente_1.ContaCorrente(1000);
/** valor do saldo */
console.log(_contaCorrente.saldo);
/** saque (success) */
console.log(_contaCorrente.saque(100));
/** saque (error) */
console.log(_contaCorrente.saque(1100));
/** instancia de ContaEspecial */
var _contaEspecial = new contaespecial_1.ContaEspecial(500, 1000);
/** valor do saldo */
console.log(_contaEspecial.saldo);
/** valor do limite */
console.log(_contaEspecial.limit);
/** saque (success) */
console.log(_contaEspecial.saque(100));
/** saque (limit) */
console.log(_contaEspecial.saque(1100));
/** saque (error) */
console.log(_contaEspecial.saque(2000));
/** arrow function update limit */
var updatedLimit = function (_contaCorrente) {
    _contaCorrente.limit = 3000;
};
/** setando */
updatedLimit(_contaEspecial);
/** novo limite */
console.log(_contaEspecial.limit);
/** testando novo limite */
console.log(_contaEspecial.saque(2000));
//# sourceMappingURL=principal.js.map