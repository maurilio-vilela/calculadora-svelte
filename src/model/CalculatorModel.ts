const NAO_LIMPAR_TELA = false;
const LIMPA_TELA = true;
export default class CalculatorModel{
    #value: string
    #accumulate: number
    #operation: string
    #clearDisplay: boolean

    constructor(value: string = null, accumulate: number = null, operation: string = null, clearDisplay = false) {
        this.#value = value;
        this.#accumulate = accumulate;
        this.#operation = operation;
        this.#clearDisplay = clearDisplay;
    }

    get value(){
        return this.#value?.replace('.', ',') || '0'
    }
    numberTyped(newValue: string){
        return new CalculatorModel(
            (this.#clearDisplay || !this.#value) ? newValue : this.#value + newValue,
            this.#accumulate,
            this.#operation,
            NAO_LIMPAR_TELA
        )
    }
    ponitTyped(){
        return new CalculatorModel(
            this.#value?.includes('.') ? this.#value : this.#value + '.',
            this.#accumulate,
            this.#operation,
            NAO_LIMPAR_TELA
        )
    }
    clearDisplay(){
        return new CalculatorModel()
    }
    
    deleteNumber(){
        return new CalculatorModel(
            this.#value ? this.#value.substring(0, this.#value.length -1) : undefined,
            this.#accumulate,
            this.#operation,
            NAO_LIMPAR_TELA
        )
    }
    operationTyped(nextOperation: string){
        return this.calculate(nextOperation)
    }
    calculate(nextOperation: string = null){
        const accumulate = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#accumulate} ${this.#operation} ${this.#value}`)
        const value = !this.#operation ? this.#value : `${accumulate}`
        return new CalculatorModel(
            value,
            accumulate,
            nextOperation,
            nextOperation ? LIMPA_TELA : NAO_LIMPAR_TELA
        )
    }
}