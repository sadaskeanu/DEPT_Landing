import styles from './ClientNote.module.css'

function ClientNote({ clients }) {
  return (
    <div className={styles.wrap}>
      <ul>
        {clients.map(client => (
          <li key={client.brand}>
            <p>{client.brand}</p>
            <p>{client.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientNote
