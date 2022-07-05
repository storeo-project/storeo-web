import { Spin } from 'antd'
import { loadingStyles } from './loading.styles'
import Wrapper from '../wrapper/wrapper'

const Loading = () => {
  const styles = loadingStyles()
  return (
    <Wrapper>
      <div css={styles.content}>
        <Spin />
      </div>
    </Wrapper>
  )
}

export default Loading
