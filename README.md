# Image Pop:

A web component that can be use on any html page by including the script and element

script: `./img-pop.min.js`
element: `<img-pop src='img.jpg' title='' text=''></img-pop>`

> Images default to 100% width. Use an parent element around the web component to control position, width, etc.

## To Update:

Clone, npm install, update code, compile with `npm run build -- --target wc --name img-pop ./src/Import.vue`, then replace generated _.js_ files

## Compatiblity:
Edge 15 and above.

Edge 15 and IE 11 and below do not have image animation, but will still display image (keep in mind, if you're targeting these browsers what you add to the `title` and `text` attributes should be considered since they will not be shown).

---

# Learned:
- Building a universal web component with vue.

# Struggled:

# ToDo:
Try to remove #app div
