<template>
    <div class="d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
            @click="getquotes()" fill="currentColor"
            class="bi bi-bootstrap-reboot m-4" viewBox="0 0 16 16">
            <path
                d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
            <path
                d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
        </svg>
    </div>
    <div class="background-image-container0">
        
        <div class="card-main">
            <div class="qoute" v-for=" venue in quoteslist" :key="venue.id">
                <p class="qoutetext">{{ venue.sentence }}</p>
                <p class="name">{{ venue.character.name }}</p>

            </div>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios'
export default {
    name: 'QuotesComponent',

    data() {
        return {
            quoteslist: [],

        }
    },
    methods: {
        getquotes() {

          this.quoteslist = []

            axios.get('https://api.gameofthronesquotes.xyz/v1/random/3')

                .then(data => {

                    this.quoteslist.push(...data.data)
                    console.log(this.quoteslist)
                })
                .catch(error => {
                    console.log(error);
                })
        },

    },
    created() {

        this.getquotes()

    }
}
</script>
