import { ProxyState } from '../AppState.js'

export default class Value {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.title = data.category.title
        this.value = data.value
    }

    get Template() {

        return /*html*/`
<div class="row">

<div class="col-2">
</div>
    <div class="col-8 m-2 p-2 shadow card text-center radius-25">
    <h2 class="m-2 p-3">
    ${this.title.toUpperCase()}
    </h2>
<h6>${this.value}</h6>
<h6 id='score'></h6>
    <p class="m-2 p-5 border radius-25">
    ${this.question}
    </p>
<button class="btn border-0 bg-transparent my-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
<i class="fas fa-chevron-down"></i>
      </button>
    <div class="collapse" id="collapseExample">
      <div class="card-body">
      <h3>
      ${this.answer.toUpperCase()}
      </h3>
      <div class="d-flex justify-content-center">
      <button class="btn border-0 bg-transparent">
      <i class="fa fa-frown-o text-danger fa-3x" aria-hidden="true" type="button" data-toggle="collapse" data-target="#nextQuestion" aria-expanded="false" aria-controls="nextQuestion" onclick="app.valuesController.score('-${this.value}')"></i>
      </button>
      <button class="btn border-0 bg-transparent" type="button" data-toggle="collapse" data-target="#nextQuestion" aria-expanded="false" aria-controls="nextQuestion"><i class="fa fa-check-circle-o text-success fa-3x" onclick="app.valuesController.score('${this.value}')"aria-hidden="true"></i></button>
      </div>
      </div>
    </div>

    </div>
<div class="col-2"></div>

</div>
        `

    }
}