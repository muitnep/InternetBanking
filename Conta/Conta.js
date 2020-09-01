//Classe Abstrata
export class Conta {

     constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
           throw new Error("Você não deve instanciar um objeto do tipo Conta diretamente, pois, essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;   
      
        
   }


   //Método Abstrato
   sacar(valor){
        throw new Error("O método Sacar é abstrato.");
       
   }

   _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
   }

   depositar(valor){
       if(valor <= 0)
       {
           return;
       } 
       this._saldo += valor;           
   }

   tranferir(valor, conta){
       if(this._tipo == "salario") {
           return;
       }
       const valorSacado = this.sacar(valor);
       conta.depositar(valorSacado);
       
   }
}