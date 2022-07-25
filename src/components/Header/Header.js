import { ReactComponent as DeptLogo } from './assets/DEPTLOGO.svg'
import { ReactComponent as MenuDesktop } from './assets/menuDesktop.svg'
import styles from './Header.module.css'

const NAVIGATION_ITEMS = [
  { label: 'WORK', url: '#' },
  { label: 'CULTURE', url: '#' },
  { label: 'SERVICES', url: '#' },
  { label: 'INSIGHTS', url: '#' },
  { label: 'CAREERS', url: '#' },
  { label: 'CONTACT', url: '#contact' }
]

function Header() {
  return (
    <header className={styles.wrap}>
      <a href="/" aria-label="Main page">
        <DeptLogo className={styles.logo} aria-hidden />
      </a>
      <nav className={styles.nav}>
        {NAVIGATION_ITEMS.map(({ url, label }) => (
          <a className={styles.navLink} href={url}>
            {label}
          </a>
        ))}
      </nav>
      <button className={styles.button}>
        <span className={styles.menuMobile}>MENU</span>
        <MenuDesktop className={styles.menuDesktop} />
      </button>
    </header>
  )
}

export default Header
