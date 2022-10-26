import { css } from 'aphrodite'
import styles from './Styles'

const index = ({show,click}) => {
  return show && <div className={css(styles.backdrop)} ></div>
}

export default index