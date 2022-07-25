import styles from './ClientCard.module.css'

function ClientCard({ brand, title, coverUrl }) {
  return (
    <a href="#" className={styles.wrap}>
      <p className={styles.head}>{brand}</p>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.img} src={coverUrl} alt="background" />
    </a>
  )
}

export default ClientCard
