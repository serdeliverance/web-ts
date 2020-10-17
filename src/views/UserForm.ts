import { View } from './View'
import { UserProps, User } from '../models/User'

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    }
  }

  onSetNameClick = (): void => {
    let input = this.parent.querySelector('input')

    if (input) {
      let name = input.value
      this.model.set({ name })
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <h1>User Form<h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }
}
