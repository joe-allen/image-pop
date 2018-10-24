<template>
  <div class="img-pop-container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id qui neque voluptatem at sunt dicta nemo omnis impedit mollitia vero pariatur cumque cum quis magni, a eaque. Iure, veritatis?
    Totam, voluptatibus doloribus! Architecto, quae? Delectus nostrum aperiam impedit molestiae quo! Fugiat assumenda eos molestias sunt, repellendus nulla! Ratione nam fugit illo ab deleniti excepturi fuga laudantium dolorem molestiae reiciendis!</p>
    <div class="img-pop-container-relative">
      <img width="250px" :class="{invisible : imageOpen}" @click="open" src="https://d13p2xj50zkyqm.cloudfront.net/promos_4/LF/ALR/ALR_ChooseYourselfGuidetoWealth_0618/James-book-big.jpg" alt="something" class="img isInitialImg">
    </div>
    <div id="inject_style"></div>
    <div class="img-pop-container-popped" :class="{hide : !imageOpen}">
      <div class="background-overlay"></div>
      <img @click="close" src="https://d13p2xj50zkyqm.cloudfront.net/promos_4/LF/ALR/ALR_ChooseYourselfGuidetoWealth_0618/James-book-big.jpg" alt="something" class="img isPoppedImg">
    </div>
    <p>Minus porro deleniti, consectetur laborum sit accusantium doloribus, incidunt dolore odio expedita quis quibusdam maxime necessitatibus nam consequatur? Nemo, distinctio. Aliquam laboriosam nulla officia provident, dolores quod ipsam quis voluptas.
    Nostrum repellat minima veniam, quae maxime hic consequatur commodi incidunt officia eveniet ipsam et autem, optio quisquam delectus, itaque consectetur pariatur ratione voluptates. Maiores soluta atque, corrupti alias exercitationem ratione!</p>
  </div>
</template>

<script>
import "@webcomponents/webcomponentsjs";

export default {
  name: "HelloWorld",
  props: {
    msg: "",
    src: ""
  },
  data() {
    return {
      imageOpen: false
    }
  },
  methods: {

    open: function(e) {

      let injectStyleEl = document.getElementById('inject_style');
      let initialEl = document.querySelector('.isInitialImg');
      let poppedEl = document.querySelector('.isPoppedImg');
      let posImg = e.target.getBoundingClientRect();
      let winWidth = window.innerWidth;
      let imgNaturalWidth = e.target.naturalWidth;
      let goToLeft = (winWidth-imgNaturalWidth) / 2;

      // ui update, show image to pop
      this.imageOpen = true;

      console.log("cool", initialEl.offsetWidth);

      injectStyleEl.innerHTML = `
        <style>
          .isPoppedImg {
            width: ${initialEl.offsetWidth}px;
            top: ${posImg.top}px;
            left: ${posImg.left}px;
            animation: pop;
            animation-duration: 1s;
            animation-iteration: 1;
            animation-fill-mode: forwards;
          }
          @keyframes pop {
            0% {
              opacity: 0;
              width: ${initialEl.offsetWidth}px;
              background: red;
              position: fixed;
              top: ${posImg.top}px;
              left: ${posImg.left}px;
            }
            25% {
              opacity: 1;
              background: green;
            }
            50% {
              background: green;
            }
            100% {
              width: calc(${imgNaturalWidth}px);
              position: fixed;
              left: ${goToLeft}px;
            }
          }
        </style>
        `

      // // prevent image from being shown immediently
      // poppedEl.style.opacity = 0;
      // poppedEl.style.position = "fixed";
      // poppedEl.style.top = posImg.top + "px";
      // poppedEl.style.left = posImg.left + "px";

      // let getDifferenceToMove = goToLeft-posImg.left;
      // let widthGrow = e.target.clientWidth;

      // setTimeout(function() {

      //   poppedEl.style.opacity = 1;

      //   let updateWidth = setInterval(function() {

      //     if(widthGrow < imgNaturalWidth) {
      //       widthGrow = widthGrow+25;
      //       poppedEl.style.width = widthGrow + "px";
      //     }
      //   }, 1);

      //   poppedEl.style.width = e.target.naturalWidth+"px";
      // }, 0);

      // setTimeout(function() {

      //   poppedEl.style.opacity = 1;
      //   let limitLeft = goToLeft;

      //   let updateLeft = setInterval(function() {

      //     if(imgNaturalWidth < winWidth) {

      //       if(posImg.left >= goToLeft) {
      //         getDifferenceToMove = Math.floor(getDifferenceToMove)+80;
      //         poppedEl.style.left = -(Math.floor(getDifferenceToMove)) + "px";

      //         console.log('is more right');

      //         if(Math.floor(-limitLeft) <= Math.floor(getDifferenceToMove)) {

      //           clearInterval(updateLeft);
      //         }
      //       } else {
      //         console.log('is more left');
      //       }

      //     } else {
      //       console.log('passed 0');
      //     }

      //     // if(imgNaturalWidth < winWidth && widthGrow < imgNaturalWidth) {
      //     //   clearInterval(updateWidth);
      //     //   console.log('stopped');
      //     // }

      //   }, 10);
      // }, 1);
    },
    close: function() {
      this.imageOpen = false;
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hide {
  display: none;
}
.invisible {
  visibility: hidden;
}
.isPoppedImg {}
.img-pop-container-relative {
  /* float: right; */
}
.img-pop-container-relative,
.img-pop-container-popped {
  border: 0;
  margin: 0;
  padding: 0;
}
.img-pop-container-popped {
  position: fixed;
  width: 100%;
  height: 100%;
}
.img {
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
