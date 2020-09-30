import { User } from './models/User'

let user = new User({ name: 'pepe', age: 20 })

user.on('change', () => console.log(`I'm a callback`))
user.on('change', () => console.log(`I'm another crazy callback`))
user.on('mickeyCallbacksYeah!', () => console.log(`I'm another callback`))

console.log(user)
user.trigger('change')
