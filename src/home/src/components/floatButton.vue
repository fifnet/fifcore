<template>
  <div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
         <q-icon name="looks_one" style="background-color:#bbb;font-size: 48px;"/>
        </div>
        <div class="flip-card-back">
          <q-icon name="menu" style="font-size: 48px;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatButton",
  setup() {
    return {};
  },
};
</script>
<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 48px;
  height: 48px;
  
  border-radius:48px;
  /*perspective: 1000px;  Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: purple;
  color: white;
  transform: rotateY(180deg);
}
</style>