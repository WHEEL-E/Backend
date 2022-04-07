import SupervisiorModel from '../schema/Supervisior.schema'

export const createSupervisior = async () => {
  const response = await SupervisiorModel.create({
    name: 'Supervisior',
    email: '',
    password: '',
    phone: ''
  })

  return response
}
