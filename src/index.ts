import { User } from './models/User'

let user = new User({ id: 1 })

user.on('save', () => {
  console.log(user)
})

user.save()
