import coverUrl from './assets/cover.png'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <div className={styles.wrap}>
      <p className={styles.head}>WORK</p>
      <h1 className={styles.title}>
        A selection of projects that <strong>pioneer tech</strong> and{' '}
        <strong>marketing</strong> to help brands stay ahead.
      </h1>
      <img className={styles.img} src={coverUrl} alt="background" />
    </div>
  )
}

export default HeroSection
