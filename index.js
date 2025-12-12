import Ceibo from "ceibo";

const ref = Symbol("pageRef");

function create(page, blueprint) {
  return Object.assign({
    get [ref]() {
      return page;
    },
    blueprint
  })
}

function fillable(selector, options = {}) {
  return function(value) {
    return this[ref].locator(selector).fill(value);
  }
}

function visitable(path) {
  return function() {
    return this[ref].goto(path);
  };
}
