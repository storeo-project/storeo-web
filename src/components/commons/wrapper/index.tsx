import { _styles } from './_.styles'

const Wrapper = ({ children }) => {
  const styles = _styles()

  return <div css={styles.content}>{children}</div>
}

export default Wrapper
