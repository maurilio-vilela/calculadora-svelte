<script lang="ts">
    import Calculadora from "../components/Calculadora.svelte";
</script>
<main>
    <Calculadora />
</main>
<style>
    :global(body{ background-color: #5e5e5e; })
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }
</style>