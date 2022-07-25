import { ReactComponent as FacebookLogo } from './assets/facebookLogo.svg'
import { ReactComponent as InstagramLogo } from './assets/instagramLogo.svg'
import { ReactComponent as TwitterLogo } from './assets/twitterLogo.svg'
import { ReactComponent as DeptLogo } from './assets/DeptLogo.svg'
import styles from './Footer.module.css'

const NAVIGATION_ITEMS = [
  { label: 'WORK', url: '#' },
  { label: 'SERVICES', url: '#' },
  { label: 'STORIES', url: '#' },
  { label: 'ABOUT', url: '#' },
  { label: 'CAREERS', url: '#' },
  { label: 'CONTACT', url: '#contact' }
]

const SOICAL_ITEMS = [
  { label: 'facebook', logo: FacebookLogo },
  { label: 'label', logo: TwitterLogo },
  { label: 'instagram', logo: InstagramLogo }
]

function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.navigation}>
        <a className={styles.logoDesktop} href="/" aria-label="Main page">
          <DeptLogo aria-hidden />
        </a>
        <ul className={styles.list}>
          {NAVIGATION_ITEMS.map(({ label, url }) => (
            <li key={label} className={styles.item}>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {SOICAL_ITEMS.map(({ label, logo: Logo }) => (
            <li key={label} className={styles.social}>
              <a className={styles.socialLink} href="#" aria-label={label}>
                <Logo aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.line}></div>
      <div className={styles.termsWrap}>
        <p className={styles.terms}>Chamber of Commerce: 63464101 </p>
        <p className={styles.terms}>VAT: NL 8552.47.502.B01 </p>
        <p className={styles.terms}>Terms and conditions</p>
        <p className={styles.copyright}>© 2022 Dept Agency</p>
      </div>
    </footer>
  )
}

export default Footer
