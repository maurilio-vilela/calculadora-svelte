
<script lang="ts">
    import Botao from "../components/Botao.svelte";
</script>
<main>
    
    <section class="container">
        <span class="saida"></span>
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
        margin: 0 auto;
    }
    .saida{
        display: flex;
        width: 14.3rem;
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