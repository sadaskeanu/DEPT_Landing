import styles from './Footer.module.css'
import { ReactComponent as FacebookLogo } from './assets/facebookLogo.svg'
import { ReactComponent as InstagramLogo } from './assets/instagramLogo.svg'
import { ReactComponent as TwitterLogo } from './assets/twitterLogo.svg'

function Footer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.navigarion}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a src="#">WORK</a>
          </li>
          <li className={styles.item}>
            <a src="#">SERVICES</a>
          </li>
          <li className={styles.item}>
            <a src="#">STORIES</a>
          </li>
          <li className={styles.item}>
            <a src="#">ABOUT</a>
          </li>
          <li className={styles.item}>
            <a src="#">CAREERS</a>
          </li>
          <li className={styles.item}>
            <a src="#">CONTACT</a>
          </li>
        </ul>

        <ul className={styles.list}>
          <li className={styles.social}>
            <a src="#">
              <FacebookLogo />
            </a>
          </li>
          <li className={styles.social}>
            <a src="#">
              <TwitterLogo />
            </a>
          </li>
          <li className={styles.social}>
            <a src="#">
              <InstagramLogo />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.line}></div>
      <p className={styles.terms}>
        Chamber of Commerce: 63464101 VAT: NL 8552.47.502.B01 Terms and
        conditions
      </p>
      <p className={styles.copyright}>© 2022 Dept Agency</p>
    </div>
  )
}

export default Footer
