import { UserForm } from './views/UserForm'
import { User } from './models/User'

let user = User.buildUser({ name: 'NAME', age: 20 })

let root = document.getElementById('root')

if (root) {
  let userForm = new UserForm(root, user)
  userForm.render()
} else {
  throw new Error('Root element not found')
}
