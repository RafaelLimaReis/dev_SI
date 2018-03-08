class ContaCorrente 
{
    public saldo: number;

    constructor(value: number){  this.saldo = value }

    saque (value: number)
    {
        if (this.saldo < value) {
            return 'Saldo insuficiente...';
        } else {
            let newValue = this.saldo - value;
            return `Saque realizado, novo saldo R$ ${newValue}`
        }
    }
}

interface Excesao
{
    limit: number;
}

export {ContaCorrente, Excesao}