
<script lang="ts">
    import Botao from "../components/Botao.svelte";
</script>
<main>
    
    <section class="container">
        <p class="saida">Saída</p>
        <Botao texto="C" />
        <Botao texto="Del" />
        <Botao texto="%" />
        <Botao texto="/" />
        <Botao texto="7" />
        <Botao texto="8" />
        <Botao texto="9" />
        <Botao texto="*" />
        <Botao texto="4" />
        <Botao texto="5" />
        <Botao texto="6" />
        <Botao texto="-" />
        <Botao texto="1" />
        <Botao texto="2" />
        <Botao texto="3" />
        <Botao texto="+" />
        <Botao texto="0" />
        <Botao texto="," />
        <Botao texto="=" />
    </section>
</main>
<style>
    *{
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        width: 15.625rem;
    }
    .saida{
        display: flex;
        width: 13.885rem;
        height: 3rem;
        padding: 0.5rem;
        border: 1px solid #CFCFCF;
        margin:0px;
        font-size: 2rem;
        justify-content: flex-end;
        align-items: center;
    }
</style>