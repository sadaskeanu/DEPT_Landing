import styles from './Filter.module.css'

function Filter() {
  return (
    <div className={styles.wrap}>
      <p className={styles.filter}>
        Show me{' '}
        <a className={styles.link} href="#">
          all work
        </a>
      </p>

      <p className={styles.filter}>
        in{' '}
        <a className={styles.link} href="#">
          all industries
        </a>
      </p>
    </div>
  )
}

export default Filter
