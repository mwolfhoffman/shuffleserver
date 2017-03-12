const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}


const models = {
  organization:{
    name:"Organization",
    endpoint: 'organizations'
  },
  team: {
    name: 'Team',
    endpoint: 'teams'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


export  {
  actions,
  models
}