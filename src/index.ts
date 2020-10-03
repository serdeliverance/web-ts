import { User } from './models/User'

let user = new User({ name: 'NEW RECORD', age: 16 })

user.events.on('change', () => {
  console.log('change')
})
