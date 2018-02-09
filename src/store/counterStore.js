import {observable, action, computed} from 'mobx'

class CounterStore {
  @observable counter = 0
  @action increamentCounter = () => {
    this.counter++
  }
  @action decrementCounter = () => {
    this.counter--
  }
  @computed get counts(){
    return this.counter
  }
}

const store = new CounterStore()

export default store
