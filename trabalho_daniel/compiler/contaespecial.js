"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var contacorrente_1 = require("./contacorrente");
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(value, valueLimit) {
        var _this = _super.call(this, value) || this;
        _this.limit = valueLimit;
        return _this;
    }
    ContaEspecial.prototype.saque = function (value) {
        var _saldo = this.limit + this.saldo;
        if (this.saldo < value) {
            if (_saldo < value) {
                return "Saldo indisponivel";
            }
            else {
                var newValue = {
                    ESPECIAL: (_saldo - value),
                    DEFICIT: (this.saldo - value) * -1
                };
                return "Saque realizado, valor de cheque especial R$ " + newValue.ESPECIAL + " a pagar R$ " + newValue.DEFICIT;
            }
        }
        else {
            return _super.prototype.saque.call(this, value);
        }
    };
    return ContaEspecial;
}(contacorrente_1.ContaCorrente));
exports.ContaEspecial = ContaEspecial;
//# sourceMappingURL=contaespecial.js.map