<script lang="ts">
    export let texto: string;
</script>

<button class="botao">
    {texto}
</button>

<style>
    .botao {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.3rem;
        margin:0px;
        margin:0px;
        width: 60px;
        font-weight: 700;
        font-size: 1.1rem;
        cursor:pointer;
    }
    .botao:nth-child(18){
        padding: 1.3rem 3.62rem;
    }
</style>