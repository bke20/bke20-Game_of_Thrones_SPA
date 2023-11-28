<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
    
<style>
.background-image-container0 {
    display: flex;
    justify-content: center;
    align-items: center;

}

.card-main {
    width: 60%;

}

.qoute {
    font-size: 20px;
    /* Adjust font size */
    font-style: italic;
    padding: 10px;
    /* Add padding for better readability */
    border-left: 4px solid #333;
    /* Add a left border for emphasis */
    border-right: 4px solid #333;
    /* Add a left border for emphasis */
    margin: 10px 0;
    /* Add margin for spacing between quotes */
}

.qoutetext::before {
    content: '"';
}

.qoutetext::after {
    content: '"';
}

.name {
    display: flex;
    justify-content: flex-end;
    font-size: 16px;

}

.name::before {
    content: '-';
}

.card-heading {
    font-size: 28px;
    font-weight: 600;
}

.inp-box {
    padding: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.inp {
    width: 400px;
    height: 40px;
    border-radius: 8px;
    padding-left: 20px;


}

.small-card {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    /* Rounded corners for a softer look */
    overflow: hidden;
    /* Ensure content doesn't overflow if the height is exceeded */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    border: none;

}

.small-card:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

}

.lnk-card {
    text-decoration: none;
}

.head {
    background-color: rgb(229, 231, 235);
    width: fit-content;
    border-radius: 0px 10px 0px 0px;
    padding: 10px;
}

.body {
    background-color: rgb(229, 231, 235);
    border-radius: 0px 10px 10px 10px;
    padding: 10px;

}

.clr {
    background-color: rgb(229, 231, 235);
    border: none;
    height: 150px;

}

.inner-body {
    background-color: rgb(207, 215, 231);
    border-radius: 10px;
}

.card-text-house {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
}

.houses-full-name {
    max-width: 200px;
}

#outerDiv {

    height: 550px;
    /* Adjust the height as needed */
    overflow: hidden;
    /* Hide the scrollbar of the outer div */
}

#innerDiv {
    margin-top: 30px;
    max-height: 100%;
    /* Adjust the max-height as needed */
    overflow-y: auto;
    /* Enable vertical scrolling for the inner div */
}

/* WebKit browsers (Chrome, Safari) */
#innerDiv::-webkit-scrollbar {
    display: none;
}

/* Firefox */
#innerDiv {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}


#outerDiv-qoute {

    height: 200px;
    /* Adjust the height as needed */
    overflow: hidden;
    /* Hide the scrollbar of the outer div */
}

.img-carousel{
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>