import App from './js/app';

if(typeof(lf_components) !== "undefined") {
  let app = new App(lf_components);
  app.init()
}