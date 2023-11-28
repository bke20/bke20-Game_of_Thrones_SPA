<template>
    <div class="container">

        <div class="inp-box">
            <input class="inp" type="text" placeholder="Type Here" name="search" id="" v-model="search"
                v-on:keyup="getquotesfilterers">
        </div>
        <div class="row" v-if="searchquotes.length > 0">
            <div v-for="venue in searchquotes" :key="venue.id" class="col-md-4 mb-4">
                <router-link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal" class="lnk-card"
                    @click="showVenueDetails(venue)">

                    <div class="card small-card">
                        <div class="card-body">
                            <p class="card-heading" style="text-transform: capitalize;">{{ venue.slug }}</p>
                            <p class="card-text">{{ venue.name }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center align-items-center " style="height: 350px;">
            <h1>No data found</h1>
        </div>


    </div>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content c-model">
                    <div v-if="selectedVenue" class="modal-body ">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="main-container">
                            <div class="d-flex">
                                <div class="head">
                                    <div class="card clr">
                                        <div class="card-body">
                                            <p class="card-heading" style="text-transform: capitalize;">{{
                                                selectedVenue.name + "(" + selectedVenue.slug + ")" }}
                                            </p>
                                            <div class="d-flex houses-full-name">
                                                <p class="card-text-house">{{ selectedVenue.house.slug + ":- " }}</p>
                                                <p>{{ selectedVenue.house.name + "" }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center align-items-center " style="width:800px">

                                    <img src="got.png" width="550" height="100" />

                                </div>
                            </div>
                            <div class="body">
                                <div class="inner-body">
                                    <div class="d-flex justify-content-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                            @click="randChangeQuote()" fill="currentColor"
                                            class="bi bi-bootstrap-reboot m-4" viewBox="0 0 16 16">
                                            <path
                                                d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
                                            <path
                                                d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
                                        </svg>
                                    </div>
                                    <div class="background-image-container0">
                                        <div class="card-main">
                                            <div id="outerDiv-qoute">
                                                <div class="qoute">

                                                    <p class="qoutetext">{{ randQuote }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'PersonsComponent',

    data() {
        return {
            quoteslist: [],
            searchquotes: [],
            search: null,
            res: [],
            selectedVenue: null,
            randQuote: null,
            quotes: [],


        }
    },
    methods: {

        randChangeQuote() {

            const lengthOfQuotes = Object.keys(this.quotes).length;

            const randomIndex = Math.floor(Math.random() * lengthOfQuotes);

            this.randQuote = this.quotes[randomIndex];

        },

        showVenueDetails(venue) {
            this.selectedVenue = venue;
            console.log(this.selectedVenue);
            this.quotes = this.selectedVenue.quotes;
            const lengthOfQuotes = Object.keys(this.quotes).length;

            const randomIndex = Math.floor(Math.random() * lengthOfQuotes);

            // Use the random index to get a random quote
            this.randQuote = this.quotes[randomIndex];





            // Code to open the modal box goes here
        },
        getquotes() {


            axios.get('https://api.gameofthronesquotes.xyz/v1/characters')

                .then(data => {
                    this.searchquotes = []

                    this.quoteslist.push(...data.data)
                    this.searchquotes.push(...data.data)
                    //  console.log(this.quoteslist)
                })
                .catch(error => {
                    console.log(error);
                })

        },
        getquotesfilterers() {

            this.searchquotes = []
            this.quoteslist.forEach(quote => {
                if (quote.slug.startsWith(this.search)) {
                    console.log(quote);
                    this.searchquotes.push(quote);
                }
            });
        },
    },
    created() {

        this.getquotes()

    }
}
</script>
    