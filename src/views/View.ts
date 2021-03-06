import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract template(): string

  regionsMap(): { [key: string]: string } {
    return {}
  }

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

  mapRegions(fragment: DocumentFragment): void {
    let regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      let selector = regionsMap[key]
      let element = fragment.querySelector(selector)
      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''

    let templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.onRender()

    this.parent.appendChild(templateElement.content)
  }
}
