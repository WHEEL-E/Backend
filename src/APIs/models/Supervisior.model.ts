import SupervisiorModel from '../Schema/Supervisior.schema'

export const createSupervisior = async () => {
  const response = await SupervisiorModel.create({
    name: 'Supervisior',
    email: '',
    password: '',
    phone: ''
  })

  return response
}
