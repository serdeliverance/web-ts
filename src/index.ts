import { UserEdit } from './views/UserEdit'
import { User } from './models/User'

let user = User.buildUser({ name: 'NAME', age: 20 })

let root = document.getElementById('root')

if (root) {
  let userEdit = new UserEdit(root, user)

  userEdit.render()

  console.log(userEdit)
} else {
  throw new Error('Root element not found')
}
