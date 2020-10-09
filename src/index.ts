import { User } from './models/User'

let user = User.buildUser({ id: 1 })

user.on('save', () => {
  console.log(user)
})

user.save()
