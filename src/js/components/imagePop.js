import '../../scss/components/imagePop.scss';

class imagePop {
  constructor(props) {
    if(props.componentName != undefined) {
      this.componentName = props.componentName;
    }
  }
  pop(img, shadow, event) {

    // set variables
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let imgNaturalWidth = event.target.naturalWidth;
    let imgNaturalHeight = event.target.naturalHeight;
    let posImg = event.target.getBoundingClientRect();
    let imgPortrait = false;
    let poppedImgWidth = (imgNaturalWidth > winWidth) ? winWidth-100 : imgNaturalWidth;
    let poppedImgHeight = (imgNaturalHeight > winHeight) ? winHeight-500 : imgNaturalHeight;

    img.classList.add('invisible');
    shadow.classList.remove('hide');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    if(imgNaturalHeight > winHeight) {
      imgPortrait = false;
      poppedImgWidth = winHeight*.5;
    }

    // set img left corner position
    let goToLeft = (winWidth-poppedImgWidth) / 2;

    var css = `
      .isPoppedImg {
        position: fixed;
        width: ${img.offsetWidth}px;
        height: ${img.offsetHeight}px;
        top: ${posImg.top}px;
        left: ${posImg.left}px;
        animation: pop;
        animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        opacity: 1;
      }
      @keyframes pop {
        0% {
          position: fixed;
          width: ${(imgPortrait) ? 'auto' : img.offsetWidth+'px'};
          height: ${(imgPortrait) ? img.offsetHeight+'px' : 'auto'};
          top: ${posImg.top}px;
          left: ${posImg.left}px;
        }
        100% {
          transform: scale(1.4);
          position: fixed;
          width: ${(imgPortrait) ? 'auto' : poppedImgWidth+'px'};
          height: ${(imgPortrait) ? poppedImgHeight+'px' : 'auto'};
          margin: 100px auto;
          left: ${goToLeft}px;
          top: 4em;
        }
      }
      @media screen and (max-width: 540px) {
        @keyframes pop {
          0% {
            opacity: 0;
            position: fixed;
            width: ${(imgPortrait) ? 'auto' : img.offsetWidth+'px'};
            height: ${(imgPortrait) ? img.offsetHeight+'px' : 'auto'};
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
            margin: 100px auto;
            left: ${goToLeft}px;
            top: 4em;
          }
        }
      }
    `;

    // let shadowElement = document.getElementsByClassName('imagePop_shadowElement')[0];
    shadow.insertAdjacentHTML('beforeend', `

      <div class="imagePop_shadowElement--container">

        <!--  show pop image -->
        <div class="imagePop_shadowElement--img">
          <img src="${img.src}" class="img isPoppedImg">
        </div>


        <!--  show pop title / text -->
        <div class="imagePop_shadowElement--text ${img.dataset.title == undefined || img.dataset.text == undefined ? 'hide' : ''}">
          <div class="imagePop_shadowElement_inner">
            <h3 class="${img.dataset.title == undefined ? 'hide' : ''}">${img.dataset.title}</h3>
            <p class="${img.dataset.text == undefined ? 'hide' : ''}">${img.dataset.text}</p>
          </div>
        </div>
      </div>
    `);

    // insert styles on <head>
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  close(image, shadow) {
    // close imagePop
    shadow.classList.add('hide');
    image.classList.remove('invisible');
    document.getElementsByTagName('body')[0].style.overflow = 'initial';
  }
  getElements(images, closes, shadowImages) {
    // store elements
    let elementArr = [];

    // loop over images
    for(let i = 0; i < closes.length; i++) {
      let obj = {};
      // add event listener to img
      images[i].addEventListener('click', this.pop.bind(this, images[i], shadowImages[i]), false)
      closes[i].addEventListener('click', this.close.bind(this, images[i], shadowImages[i]), false);
      obj.image = images[i];
      obj.close = closes[i];
      obj.shadowImage = shadowImages[i];
      elementArr.push(obj);
    }

    return elementArr;
  }
  init() {

    this._cache = {};

    // listen form close event
    if(this.componentName != undefined) {
      // cache images
      let images = document.getElementsByClassName(`${this.componentName}`);
      let closes = document.getElementsByClassName(`${this.componentName}--close`);
      let shadowImages = document.getElementsByClassName(`${this.componentName}_shadowElement`);

      this._cache = this.getElements(images, closes, shadowImages);

      // listen for resize
      // close open imgs
      window.addEventListener('resize', () => {
        // loop over images
        for(let i = 0; i < closes.length; i++) {
          // add 'hide' if window resized
          if(!shadowImages[i].classList.contains('hide')) {
            shadowImages[i].classList.add('hide');
            images[i].classList.remove('invisible');
            document.getElementsByTagName('body')[0].style.overflow = 'initial';
          }
        }
      });
    }
  }
}

export default imagePop;