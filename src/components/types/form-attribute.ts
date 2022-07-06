import { MutationResult } from '@wundergraph/nextjs'

export default interface FormAttribute {
  onResponse?: (response: MutationResult<any>) => void
  submitText?: string
}
