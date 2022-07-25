import logos from './logos'
import styles from './ClientList.module.css'

function ClientList() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Clients</h3>
      <p className={styles.text}>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <ul className={styles.wrapGrid}>
        {logos.map(brand => (
          <li key={brand.brand}>
            <img
              className={styles.logoDesktop}
              width="114.29px"
              height="60px"
              src={brand.logoUrl}
              alt="logo"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientList
