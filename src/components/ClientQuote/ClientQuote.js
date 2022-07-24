import styles from './ClientQuote.module.css'

function ClientQuote({ quote }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.quote}>{quote.quote}</p>
      <p className={styles.name}>{quote.name}</p>
    </div>
  )
}

export default ClientQuote
