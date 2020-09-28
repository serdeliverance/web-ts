import { User } from './models/User'

let user = new User({ name: 'pepe', age: 20 })

user.set({ name: 'pepe2', age: 25 })

console.log(user.get('name'))
