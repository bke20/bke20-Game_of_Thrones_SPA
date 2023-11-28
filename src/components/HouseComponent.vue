<template>
    <div class="container">
        <div class="inp-box">
            <input class="inp" type="text" placeholder="Type Here" name="search" id="" v-model="search" v-on:keyup="getquotesfilterers">
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

                    <div v-if="selectedVenue" class="modal-body">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="container">
                            <div class="d-flex justify-content-center p-5">
                                <h1 style="text-transform: capitalize;">{{ selectedVenue.name + "(" + selectedVenue.slug +
                                    ")" }}
                                </h1>
                            </div>
                            <div class="row">
                                <div v-for="venue in selectedVenue.members" :key="venue.id" class="col-md-4 mb-4">

                                    <div class="card small-card">
                                        <div class="card-body">
                                            <p class="card-heading" style="text-transform: capitalize;">{{ venue.slug }}</p>
                                            <p class="card-text">{{ venue.name }}</p>
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
    name: 'HouseComponent',

    data() {
        return {
            quoteslist: [],
            searchquotes: [],
            selectedVenue: null


        }
    },
    methods: {


        showVenueDetails(venue) {
            this.selectedVenue = venue;
            console.log(this.selectedVenue);
            // Code to open the modal box goes here
        },
        getquotes() {
            axios.get('https://api.gameofthronesquotes.xyz/v1/houses')

                .then(data => {

                    this.quoteslist.push(...data.data)
                    this.searchquotes.push(...data.data)

                    console.log(this.quoteslist)
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
