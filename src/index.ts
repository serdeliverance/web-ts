import { User } from './models/User'

let user = new User({ name: 'NEW RECORD', age: 16 })

console.log(user.get('name'))

user.on('change', () => {
  console.log('User was changed')
})

user.set({ name: 'New name' })
