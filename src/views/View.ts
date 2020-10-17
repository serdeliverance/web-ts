import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract template(): string

  eventsMap(): { [key: string]: () => void } {
    return {}
  }

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
