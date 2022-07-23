import PropTypes from 'prop-types'

import styles from './ClientCard.module.css'

const propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  coverUrl: PropTypes.string
}

function ClientCard({ brand, title, coverUrl }) {
  return (
    <div>
      <div className={styles.wrap}>
        <p className={styles.head}>{brand}</p>
        <div className={styles.textWrap}>
          <p className={styles.text}>{title}</p>
        </div>
        <img className={styles.img} src={coverUrl} alt="background" />
      </div>
    </div>
  )
}

ClientCard.propTypes = propTypes

export default ClientCard
