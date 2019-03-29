import imagePop from './components/imagePop';

class App {
  constructor(components) {
    this.imagePop = components.imagePop;
  }
  init() {

    let props = {};

    // wait for DOM to load
    window.addEventListener('DOMContentLoaded', () => {
      if(this.imagePop) {
        // TODO: find way to make componentName dynamic
        props.componentName = 'imagePop'
        let pop = new imagePop(props);
        pop.init();
      }
    });

  }
}

export default App;