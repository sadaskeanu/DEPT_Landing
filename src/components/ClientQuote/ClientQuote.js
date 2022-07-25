import styles from './ClientQuote.module.css'

function ClientQuote({ quote, name }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default ClientQuote
