import  DioAccount from "./DioAccount";

export default class FeesAccount extends DioAccount{
    depositFees = (deposit: number): void => {
        this.deposit(deposit + 10)
    }
}