import { computed, autorun, observable, action } from "mobx"

class workstore {
  @observable example

  @computed get example() {
    //return this.x * this.y
  }


  @action example = () =>{
    
  }

}

var store = window.store = new workstore

export default store

autorun(() => {
  //example
})
