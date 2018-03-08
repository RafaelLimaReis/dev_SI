import {ContaCorrente, Excesao} from './contacorrente'

export class ContaEspecial extends ContaCorrente implements Excesao
{
    public limit: number;

    constructor(value: number, valueLimit: number)
    { 
        super(value);
        this.limit = valueLimit 
    }

    saque (value:number) 
    {
        let _saldo = this.limit + this.saldo;

        if (this.saldo < value) {
            if (_saldo < value) {
                return "Saldo indisponivel";
            } else {
                let newValue = {
                    ESPECIAL: (_saldo - value),
                    DEFICIT: (this.saldo - value) * -1
                }

                return `Saque realizado, valor de cheque especial R$ ${newValue.ESPECIAL} a pagar R$ ${newValue.DEFICIT}`
            }
        } else {
            return super.saque(value)
        }
    }
}

