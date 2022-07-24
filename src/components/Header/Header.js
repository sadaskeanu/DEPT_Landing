import styles from './Header.module.css'
import { ReactComponent as DeptLogo } from './assets/DEPTLOGO.svg'
import { ReactComponent as MenuDesktop } from './assets/menuDesktop.svg'

function Header() {
  return (
    <div className={styles.wrap}>
      <a src="#" alt="logo">
        <DeptLogo className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <a className={styles.navLink} src="#" alt="WORK">
          WORK
        </a>
        <a className={styles.navLink} src="#" alt="CULTURE">
          CULTURE
        </a>
        <a className={styles.navLink} src="#" alt="SERVICES">
          SERVICES
        </a>
        <a className={styles.navLink} src="#" alt="INSIGHTS">
          INSIGHTS
        </a>
        <a className={styles.navLink} src="#" alt="CAREERS">
          CAREERS
        </a>
        <a className={styles.navLink} src="#" alt="CONTACT">
          CONTACT
        </a>
      </nav>
      <button className={styles.button}>
        <span className={styles.menuMobile}>MENU</span>
        <MenuDesktop className={styles.menuDesktop} />
      </button>
    </div>
  )
}

export default Header
