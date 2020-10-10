import { User } from './models/User'

let collection = User.buildUserCollection()

collection.on('change', () => console.log(collection))

collection.fetch()
