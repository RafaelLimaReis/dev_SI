import { ContaEspecial } from './contaespecial';
import { ContaCorrente, Excesao } from './contacorrente';

/** instancia de ContaCorrente */
let _contaCorrente = new ContaCorrente(1000);

/** valor do saldo */
console.log(_contaCorrente.saldo);

/** saque (success) */
console.log(_contaCorrente.saque(100));

/** saque (error) */
console.log(_contaCorrente.saque(1100));

/** instancia de ContaEspecial */
let _contaEspecial = new ContaEspecial(500, 1000);

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
let updatedLimit = (_contaCorrente: Excesao) => {
    _contaCorrente.limit = 3000
}

/** setando */
updatedLimit(_contaEspecial);

/** novo limite */
console.log(_contaEspecial.limit);

/** testando novo limite */
console.log(_contaEspecial.saque(2000));