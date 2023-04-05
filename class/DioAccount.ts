export default abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (value < 0) return console.log("Valor inválido!");
    if (!this.validateStatus()) {
      this.balance += value;
      console.log(`Seu novo saldo é de ${this.balance}`);
    }
  };

  withdraw = (value: number): void => {
    if (value < 0) return console.log("Valor inválido para saque!");
    if (value < this.balance)
      return console.log("Valor insuficiente de saldo!");

    if (!this.validateStatus()) {
      this.balance -= value;
      console.log(`Seu novo saldo é de ${this.balance}`);
    }
  };

  getBalance = (): number => {
    return this.balance
  };

  setBalance = (newBalance: number): void =>{
    this.balance = newBalance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
