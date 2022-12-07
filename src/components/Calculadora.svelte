<script lang="ts">
    import CalculatorModel from "../model/CalculatorModel";
    import Botao from "./Botao.svelte";
    import Display from "./Display.svelte";
    let calc = new CalculatorModel()
    const numberTyped = (num: string) => calc = calc.numberTyped(num)
    const ponitTyped = () => calc = calc.ponitTyped()
    const clearDisplay = () => calc = calc.clearDisplay()
</script>
<div class="calculadora">
    <Display valor={calc.value}/>
    <Botao onClick={clearDisplay} texto="C" />
    <Botao texto="Del" />
    <Botao texto="%" />
    <Botao operacao texto="/" />
    <Botao onClick={numberTyped} texto="7" />
    <Botao onClick={numberTyped} texto="8" />
    <Botao onClick={numberTyped} texto="9" />
    <Botao operacao texto="*" />
    <Botao onClick={numberTyped} texto="4" />
    <Botao onClick={numberTyped} texto="5" />
    <Botao onClick={numberTyped} texto="6" />
    <Botao operacao texto="-" />
    <Botao onClick={numberTyped} texto="1" />
    <Botao onClick={numberTyped} texto="2" />
    <Botao onClick={numberTyped} texto="3" />
    <Botao operacao texto="+" />
    <Botao onClick={numberTyped} duplo texto="0" />
    <Botao onClick={ponitTyped} texto="," />
    <Botao texto="=" />
</div>
<style>
    .calculadora{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        width: 16.625rem;
        height: 300px;
        padding: 10px;
        background-color: #413f3e;
        border-radius: 5px;
    }
</style>