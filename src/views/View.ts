import { User } from '../models/User'

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract eventsMap(): { [key: string]: () => void }
  abstract template(): string

  bindEvents(fragment: DocumentFragment): void {
    let eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      let [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    this.parent.innerHTML = ''

    let templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    this.parent.appendChild(templateElement.content)
  }
}