import styles from './Footer.module.css'
import { ReactComponent as FacebookLogo } from './assets/facebookLogo.svg'
import { ReactComponent as InstagramLogo } from './assets/instagramLogo.svg'
import { ReactComponent as TwitterLogo } from './assets/twitterLogo.svg'
import { ReactComponent as DeptLogo } from './assets/DeptLogo.svg'

function Footer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.navigation}>
        <a className={styles.logoDesktop} src="#" alt="logo">
          <DeptLogo />
        </a>
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
      <div className={styles.termsWrap}>
        <p className={styles.terms}>Chamber of Commerce: 63464101 </p>
        <p className={styles.terms}>VAT: NL 8552.47.502.B01 </p>
        <p className={styles.terms}>Terms and conditions</p>
        <p className={styles.copyright}>© 2022 Dept Agency</p>
      </div>
    </div>
  )
}

export default Footer
