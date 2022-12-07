<script lang="ts">
    export let texto: string;
    export let duplo: boolean = false;
    export let operacao: boolean = false;
    export let onClick: (valor: string) => void = () =>{}
</script>

<button class="botao" 
    on:click={() => onClick(texto)}
    class:duplo class:operacao>
    {texto}
</button>

<style>
    .botao {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 25%;
        height: 16%;
        font-weight: 700;
        font-size: 1.1rem;
        cursor:pointer;
        color:#fbfbfb;
        background-color: #838383;
        border: 1px solid #080808;
        border-radius: 3px;
    }
    .duplo{
        flex-basis: 50%;
    }
    .operacao{
        background-color: #ff7b00;
    }
    .operacao:hover{
        background-color: #db6a00;
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
    .botao:nth-child(20){
        background-color: #3171d1;
    }
    .botao:nth-child(20):hover{
        background-color: #2c60af;
    }
</style>