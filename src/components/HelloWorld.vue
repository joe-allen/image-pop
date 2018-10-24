<template>
  <div class="img-pop-container">
    <div ref="injectStyle"></div>

    <div class="img-pop-container-relative">
      <img width="250px" :class="{invisible : imageOpen}" @click="open" :src="src" :alt="alt" class="img" ref="isInitialImg">
    </div>
    <div class="img-pop-container-popped" :class="{hide : !imageOpen}">

      <!-- overlay and close btn -->
      <div class="opaqueOverlay"></div>
      <div class="close" @click="close"><span class="close_bar">&nbsp;</span><span class="close_bar">&nbsp;</span></div>

      <div class="web-component">

        <!--  show pop image -->
        <div class="web-component-img">
          <img :src="src" :alt="alt" class="img isPoppedImg">
        </div>

        <!--  show pop title / text -->
        <div v-if="title || text" class="web-component-text">
          <h3>{{ title }}</h3>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import "@webcomponents/webcomponentsjs";

export default {
  name: "HelloWorld",
  props: {
    text: "",
    title: "",
    src: "",
    alt: "",
  },
  data() {
    return {
      imageOpen: false,
      injectStyle: false,
      body: ''
    }
  },
  mounted () {
    let body = document.getElementsByTagName('body');
    this.body = body;
  },
  methods: {

    open: function(e) {

      // ui updates
      this.imageOpen = true;
      this.injectStyle = true;
      this.body[0].style.overflow = 'hidden';

      // initiate variables
      let injectStyleEl = '';
      let initialEl = '';
      let winWidth = '';
      let winHeight = ''
      let imgNaturalWidth = '';
      let imgNaturalHeight = '';
      let posImg = '';
      let goToLeft = '';
      let poppedImgWidth = '';
      let poppedImgHeight = '';
      let imgPortrait = false;

      // set variables
      injectStyleEl = this.$refs.injectStyle;
      initialEl = this.$refs.isInitialImg;
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      imgNaturalWidth = e.target.naturalWidth;
      imgNaturalHeight = e.target.naturalHeight;
      posImg = e.target.getBoundingClientRect();
      imgPortrait = false;

      poppedImgWidth = (imgNaturalWidth > winWidth) ? winWidth-100 : imgNaturalWidth;
      poppedImgHeight = (imgNaturalHeight > winHeight) ? winHeight-500 : imgNaturalHeight;

      if(imgNaturalHeight > winHeight) {
        imgPortrait = false;
        poppedImgWidth = winHeight*.5;
        console.log('yes img is height than window');
      }

      goToLeft = (winWidth-poppedImgWidth) / 2;

      // setTimeout(function() {
        // console.log('injectStyleEl', injectStyleEl);
        // console.log('initialEl', initialEl);
        // console.log('winWidth', winWidth);
        // console.log('winHeight', winHeight);
        // console.log('imgNaturalWidth', imgNaturalWidth);
        // console.log('imgNaturalHeight', imgNaturalHeight);
        // console.log('posImg', posImg);
        // console.log('goToLeft', goToLeft);
        console.log('poppedImgWidth', poppedImgWidth);
        console.log('poppedImgHeight', poppedImgHeight);
        console.log('imgPortrait', imgPortrait);
      // }, 1000);


      injectStyleEl.innerHTML = `
        <style>
          .isPoppedImg {
            position: fixed;
            width: ${initialEl.offsetWidth}px;
            height: ${initialEl.offsetHeight}px;
            top: ${posImg.top}px;
            left: ${posImg.left}px;
            animation: pop;
            animation-duration: 500ms;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          @keyframes pop {
            0% {
              opacity: 0;
              position: fixed;
              width: ${(imgPortrait) ? 'auto' : initialEl.offsetWidth+'px'};
              height: ${(imgPortrait) ? initialEl.offsetHeight+'px' : 'auto'};
              top: ${posImg.top}px;
              left: ${posImg.left}px;
            }
            25% {
              opacity: .5;
            }
            50% {
              opacity: 1;
            }
            100% {
              position: fixed;
              width: ${(imgPortrait) ? 'auto' : poppedImgWidth+'px'};
              height: ${(imgPortrait) ? poppedImgHeight+'px' : 'auto'};
              margin: 0 auto;
              left: ${goToLeft}px;
              top: 4em;
            }
          }
          @media screen and (max-width: 600px) {
            @keyframes pop {
              0% {
                opacity: 0;
                position: fixed;
                width: ${(imgPortrait) ? 'auto' : initialEl.offsetWidth+'px'};
                height: ${(imgPortrait) ? initialEl.offsetHeight+'px' : 'auto'};
                top: ${posImg.top}px;
                left: ${posImg.left}px;
              }
              25% {
                opacity: .5;
              }
              50% {
                opacity: 1;
              }
              100% {
                position: fixed;
                width: ${(imgPortrait) ? 'auto' : poppedImgWidth+'px'};
                height: ${(imgPortrait) ? poppedImgHeight+'px' : 'auto'};
                margin: 0 auto;
                left: ${goToLeft}px;
                top: 10em;
              }
            }
          }
        </style>
        `
    },
    close: function() {
      this.imageOpen = false;
      this.body[0].style.overflow = 'initial';

      // clear styles
      let injectStyleEl = this.$refs.injectStyle;
      injectStyleEl.innerHTML = "";
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
.web-component {
  overflow: scroll;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.web-component-img {
  position: absolute;
}
.web-component-text {
  background-color: #fff;
  position: absolute;
  width: 100vw;
  height: 30%;
  top: 80vh;
  z-index: 1;
  padding: 0 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -4px -4px 14px rgba(171, 171, 171, 0.1);
}
.web-component-text p {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
.opaqueOverlay {
  margin: 0;
  cursor: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: #fff;
  position: fixed;
  z-index: 0;
  opacity: 0;
  animation: opaqueOverlay;
  animation-duration: 250ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes opaqueOverlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.isPoppedImg {
  z-index: 1;
}
.img-pop-container-relative {
  float: right;
}
.img-pop-container-relative,
.img-pop-container-popped {
  border: 0;
  margin: 0;
  padding: 0;
}
.img-pop-container-popped {
  width: 100%;
  height: 100%;
}
.img {
  border: 0;
  margin: 0;
  padding: 0;
}

.close {
    color: #383838;
    font-size: 44px;
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0;
    right: 20px;
    cursor: pointer;
    animation: closeFlyIn;
    animation-duration: .3s;
    animation-delay: .3s;
    animation-fill-mode: forwards;
    backface-visibility: hidden;
    margin: 24px -124px 24px -24px;
    z-index: 111111;
}

.close .close_bar {
    background-color: #383838;
}

.close .close_bar:nth-child(1) {
    position: absolute;
    width: 4px;
    animation: closeBar_One;
    animation-duration: 250ms;
    animation-delay: 750ms;
    animation-fill-mode: forwards;
    right: 26px;
    top: -5px;
}

.close .close_bar:nth-child(2) {
    position: absolute;
    width: 4px;
    animation: closeBar_Two;
    animation-duration: 250ms;
    animation-delay: 750ms;
    animation-fill-mode: forwards;
    right: 26px;
    top: -5px;
}

@keyframes closeBar_One {
    0% {
        transform: rotate(0);
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: rotate(45deg);
        background-color: #383838;
    }
}

@keyframes closeBar_Two {
    0% {
        transform: rotate(0);
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: rotate(-45deg);
        background-color: #383838;
    }
}

@keyframes closeFlyIn {
    0% {
        transform: rotate(45deg);
        margin: 24px -30px 24px -24px;
        opacity: 0;
    }
    100% {
        transform: rotate(-90deg);
        opacity: 1;
        margin: 24px 24px 24px -24px;
    }
}
</style>
