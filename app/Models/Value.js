export default class Value {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.title = data.category.title
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

    <p class="m-2 p-5 border radius-25">
    ${this.question}
    </p>
<button class="btn border-0 bg-transparent m-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
<i class="fas fa-chevron-down"></i>
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card-body">
      <h3>
      ${this.answer.toUpperCase()}
      </h3>
      </div>
    </div>

    </div>
<div class="col-2"></div>

</div>
        `
    }
}
