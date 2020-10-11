export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form<h1>
        <input />
      </div>
    `
  }

  render(): void {
    let templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.parent.appendChild(templateElement.content)
  }
}
