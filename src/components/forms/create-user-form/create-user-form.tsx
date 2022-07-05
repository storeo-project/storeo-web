import React, { useEffect, useState } from 'react'
import { useMutation } from '../../generated/nextjs'
import jsonSchema from '../../generated/jsonschema'
import Form from '@rjsf/semantic-ui'
import { createUserInput } from '../../generated/models'
import { Button } from 'semantic-ui-react'
import FormAttribute from '../../commons/form-attribute'

const CreateUserForm: React.FC<FormAttribute> = ({
  onResponse,
  submitText,
}) => {
  const errorTransforms = (errors: any) => {
    return errors.map(error => {
      if (error.name === 'required' && error.property === '.email') {
        error.message = 'Email is required.'
      }
      if (error.name === 'pattern' && error.property === '.email') {
        error.message = 'Invalid email format.'
      }
      return error
    })
  }

  const [formData, setFormData] = useState<createUserInput>()
  const { mutate, result } = useMutation.createUser()

  useEffect(() => {
    if (onResponse) {
      onResponse(result)
    }
  }, [onResponse, result])

  return (
    <div>
      <Form
        schema={jsonSchema.createUser.input}
        formData={formData}
        liveValidate={true}
        onChange={e => {
          setFormData(e.formData)
        }}
        transformErrors={errorTransforms}
        showErrorList={false}
        onSubmit={async e => {
          await mutate({ input: e.formData })
          setFormData(undefined)
        }}>
        <Button type={'submit'}> {submitText ? submitText : 'Submit'}</Button>
      </Form>
    </div>
  )
}

export default CreateUserForm
