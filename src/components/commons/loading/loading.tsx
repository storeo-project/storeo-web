import { Loader } from 'semantic-ui-react'
import { loadingStyles } from './loading.styles'
import { Wrapper } from '../wrapper'

const Loading = () => {
  const styles = loadingStyles()
  return (
    <Wrapper>
      <div css={styles.content}>
        <Loader active />
      </div>
    </Wrapper>
  )
}

export default Loading
