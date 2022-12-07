<script lang="ts">
    export let valor: string
    $:fontSize = valor.length > 20 ? 'pequena' : `s-${valor.length}`
</script>

<div class={`display ${fontSize}`}>
    <span>{valor}</span>
</div>

<style>
    .display{
        display: flex;
        flex-basis: 100%;
        height: 2rem;
        padding: 0.5rem;
        border: 1px solid #9ec5ff;
        margin:0px;
        font-size: 1.9rem;
        color: #ffffff;
        justify-content: flex-end;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 4px;
        overflow: hidden;
    }
    .s-16{
        font-size: 1.75rem;
    }
    .s-17{
        font-size: 1.63rem;
    }
    .s-18{
        font-size: 1.52em;
    }
    .s-19{
        font-size: 1.44em;
    }
    .s-20{
        font-size: 1.37em;
    }
    .pequena{
        font-size: 1em;
    }
</style>