import {observable, computed, action, flow} from 'mobx'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
export default class User {
  @observable firstName = 'first'
  @observable lastName = 'last'

  @computed
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }


  @action setFirstName(name) {
    this.firstName = name
  }

  @action setLastName(name) {
    this.lastName = name
  }

  asyncSetFirstName = flow(function* (name) {
    try {
      yield delay(1000)
      this.firstName = name
    } catch (e) {
      console.log(e)
    }
  })
}
