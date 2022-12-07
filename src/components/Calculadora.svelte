<script lang="ts">
    import Botao from "./Botao.svelte";
    import Display from "./Display.svelte";
</script>
<div class="calculadora">
    <Display valor=""/>
    <Botao texto="C" />
    <Botao texto="Del" />
    <Botao texto="%" />
    <Botao operacao texto="/" />
    <Botao texto="7" />
    <Botao texto="8" />
    <Botao texto="9" />
    <Botao operacao texto="*" />
    <Botao texto="4" />
    <Botao texto="5" />
    <Botao texto="6" />
    <Botao operacao texto="-" />
    <Botao texto="1" />
    <Botao texto="2" />
    <Botao texto="3" />
    <Botao operacao texto="+" />
    <Botao duplo texto="0" />
    <Botao texto="," />
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
    .saida{
        display: flex;
        flex-basis: 100%;
        height: 2rem;
        padding: 0.5rem;
        border: 1px solid #9ec5ff;
        margin:0px;
        font-size: 1.9rem;
        justify-content: flex-end;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 4px;
    }
</style>