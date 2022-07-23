import styles from './Header.module.css'
import DEPTLOGO from './assets/DEPTLOGO.svg'

function Header() {
  return (
    <div className={styles.wrap}>
      <img className={styles.logo} src={DEPTLOGO} alt="logo" />
      <button className={styles.button}>MENU</button>
    </div>
  )
}

export default Header
