import styles from './ClientNote.module.css'

function ClientNote({ clients }) {
  return (
    <div className={styles.wrap}>
      <ul>
        {clients.map(client => (
          <li key={client.brand}>
            <p className={styles.brandname}>{client.brand}</p>
            <p className={styles.brandquote}>{client.quote}</p>
            <div className={styles.line}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientNote
