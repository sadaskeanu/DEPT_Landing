import PropTypes from 'prop-types'

import styles from './ClientCard.module.css'

const propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  coverUrl: PropTypes.string
}

function ClientCard({ brand, title, coverUrl }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.head}>{brand}</p>

      <h3 className={styles.title}>{title}</h3>

      <img className={styles.img} src={coverUrl} alt="background" />
    </div>
  )
}

ClientCard.propTypes = propTypes

export default ClientCard
