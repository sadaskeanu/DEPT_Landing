import styles from './HeroSection.module.css'

function HeroSection(props) {
  return (
    <div className={styles.wrap}>
      <p className={styles.head}>{props.head}</p>
      <div className={styles.textWrap}>
        <p className={styles.text}>{props.case}</p>
      </div>
      <img className={styles.img} src={props.img} alt="background" />
    </div>
  )
}

export default HeroSection
