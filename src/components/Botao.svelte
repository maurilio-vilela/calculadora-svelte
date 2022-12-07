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
        margin:0px 1px;
        width: 60px;
        font-weight: 700;
        font-size: 1.1rem;
        cursor:pointer;
        color:#fbfbfb;
        background-color: #838383;
        border: 1px solid #080808;
        border-radius: 3px;
    }
    .botao:hover{
        background-color: #636363;
    }
    .botao:nth-child(2){
        background-color: #ac0808;
    }
    .botao:nth-child(2):hover{
        background-color: #940909;
    }
    .botao:nth-child(18){
        padding: 1.3rem 3.75rem;
    }
    .botao:nth-child(20){
        background-color: #3171d1;
    }
    .botao:nth-child(20):hover{
        background-color: #2c60af;
    }
</style>