"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(value) {
        this.saldo = value;
    }
    ContaCorrente.prototype.saque = function (value) {
        if (this.saldo < value) {
            return 'Saldo insuficiente...';
        }
        else {
            var newValue = this.saldo - value;
            return "Saque realizado, novo saldo R$ " + newValue;
        }
    };
    return ContaCorrente;
}());
exports.ContaCorrente = ContaCorrente;
//# sourceMappingURL=contacorrente.js.map