import { UserForm } from './views/UserForm'
import { User } from './models/User'

let user = User.buildUser({ name: 'NAME', age: 20 })

let userForm = new UserForm(document.getElementById('root'), user)

userForm.render()
