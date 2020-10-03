import { User } from './models/User'

let user = new User({ name: 'NEW RECORD', age: 16 })

user.set({ name: 'NEW NAME', age: 33 })

user.save()
