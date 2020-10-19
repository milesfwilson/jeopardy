import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";
import { api } from './AxiosService.js'

class ValuesService {

  constructor() {
    this.getQuestion()
  }

  getQuestion() {
    api.get("random").then(res => {

      console.log("request: ", res.data)
      ProxyState.values = res.data.map(rawQuestion => new Value(rawQuestion))
      console.log(ProxyState.values)
    }).catch(err => console.error(err))

  }
}

export const valuesService = new ValuesService();

