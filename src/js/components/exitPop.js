class exitPop {
  constructor(props) {
    if(props.componentName != undefined) {
      this.componentName = props.componentName;
    }
  }
  scrollTrack(event) {
    // scrolled to bottom
    let scrollHeight = document.getElementsByTagName('body')[0].scrollHeight;
    let clientHeight = document.getElementsByTagName('body')[0].clientHeight;
    let firstElement = document.getElementsByTagName('body')[0].children;

    // console.log('firstElement: ', firstElement);
    // console.log('scrollPos+WinHeight: ', (window.scrollY+clientHeight));
    // console.log('doc height: ', scrollHeight);

    // if(event.clientY < 50 && window.innerWidth < 540) {
    //   this.pop()
    // }
  }
  pop() {
    // add class to show exitPop
    document.getElementsByClassName(`${this.componentName}--background`)[0].classList.add('active');
  }
  close() {
    // close exitPop
    document.getElementsByClassName(`${this.componentName}--background`)[0].remove();
  }
  init() {
    // start tracking scroll movement
    window.addEventListener('scroll', this.scrollTrack.bind(this), false);

    // listen form close event
    if(this.componentName != undefined) {
      let close = document.getElementsByClassName(`${this.componentName}--close`);
      for(let i = 0; i < close.length; i++) {
        document.getElementsByClassName(`${this.componentName}--close`)[i].addEventListener('click', this.close.bind(this), false);
      }
    }
  }
}

export default exitPop;