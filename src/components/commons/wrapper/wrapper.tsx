import { wrapperStyles } from './wrapper.styles'

const Wrapper = ({ children }) => {
  const styles = wrapperStyles()

  return <div css={styles.content}>{children}</div>
}

export default Wrapper
