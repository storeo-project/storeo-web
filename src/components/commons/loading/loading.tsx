import { Loader } from 'semantic-ui-react'
import { loadingStyles } from './loading.styles'
import Wrapper from '../wrapper/wrapper'

const Loading = () => {
  const styles = loadingStyles()
  return (
    <Wrapper>
      <div css={styles.content}>
        <Loader />
      </div>
    </Wrapper>
  )
}

export default Loading
