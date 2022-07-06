import CreateUserForm from './index'

export default {
  title: 'Components/Forms/CreateUserForm',
  component: CreateUserForm,
}

const Template = ({ ...args }) => {
  return <CreateUserForm submitText={args.submitText} />
}

export const Default = Template.bind({})
Default.args = {
  submitText: 'Submit',
}
