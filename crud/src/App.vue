<template>
<div>

    <h1>Produtos</h1>
    <button @click="novo" v-show="exibeLista">Novo</button>

    <div id="cadastro" v-show="!exibeLista">
    <label>Nome: </label>
    <input type="text" v-model="produto.nome" />
    <label>Preço: </label>
    <input type="number" v-model="produto.preco" />
    <br />
    <button @click="salvar">Salvar </button>
    <button @click="voltar">Voltar </button>
    </div>
    <table v-show="exibeLista">
        <tr>
            <td>Nome</td>
            <td>Preço</td>
            <td>Ação</td>
        </tr>
        <tr v-for="p of produtos" :key="p.id">
            <td>{{p.nome}}</td>
            <td>{{p.preco}}</td>
            <td>
                <button @click="editar(p)">Editar</button>
                <button @click="remover(p)">remover</button>
                </td>
        </tr>
    </table>
    <span v-show="exibeLista">R$ {{total}},00</span>
</div>
</template> 

<script>
export default {
    data() {
        return {
        produto:{},
        produtos:[
            {id: 1, nome:'nome a', preco: 10},
            {id: 2, nome:'nome b', preco: 10},
            {id: 3, nome:'nome c', preco: 10},
            {id: 4, nome:'nome d', preco: 10}
        ],
        exibeLista : true
        }
    },
    methods:{
        novo(){
            this.exibeLista = false;
        },
        voltar(){
            this.exibeLista = true;
        },
        salvar(){
            this.remove(this.produtos, this.produto);
            this.produtos.push(this.produto);
            this.produto = {}
            this.exibeLista = true;
        },
        editar(item){
            this.produto = item;
            this.exibeLista = false;
        },
        remover(item){
            this.remove(this.produtos, item)
        },
        remove(arr, item){
        for (var i = arr.length; i--;) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        }
    },
    computed:{
        total(){
            let total = 0;
        this.produtos.forEach(p => {
                total +=parseInt(p.preco);
        });
        return total;
        }
    }
}
</script>