import { Loader } from 'semantic-ui-react'
import { _styles } from './_.styles'
import Wrapper from '../wrapper'
import { withTheme } from '@emotion/react'

const Loading = props => {
  const styles = _styles(props.theme)
  return (
    <Wrapper>
      <div css={styles.content}>
        <Loader active />
      </div>
    </Wrapper>
  )
}

export default withTheme(Loading)
