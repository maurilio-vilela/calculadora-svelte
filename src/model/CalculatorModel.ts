const NAO_LIMPAR_TELA = false;

export default class CalculatorModel{
    #value: string
    #accumulate: number
    #operation: string
    #clearDisplay: boolean

    constructor(value: string = null, accumulate: number = null, operation: string = null, clearDisplay: boolean = false) {
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
}