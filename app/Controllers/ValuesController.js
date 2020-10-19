import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    ProxyState.on("playerScore", _draw)
    _draw()
  }

  score(score) {
    valuesService.score(score)
  }

}
