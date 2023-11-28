<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div class="carousel-item active  carousel-height img-carousel">
        <img src="ned.jpg" class="d-block w-100 " alt="..." >
      </div>
      <div class="carousel-item  carousel-height">
        <img src="ed.jpg" class="d-block w-100 " alt="...">
      </div>
      <div class="carousel-item  carousel-height">
        <img src="ned.jpg" class="d-block w-100 " alt="...">
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'HomeComponent',
}
</script>
<style>
  .carousel-height{
    height: 600px;
    object-fit: contain;
  }
</style>
   