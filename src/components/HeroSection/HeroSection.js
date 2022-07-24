import styles from './HeroSection.module.css'

function HeroSection(props) {
  return (
    <div className={styles.wrap}>
      <p className={styles.head}>{props.head}</p>

      <h1 className={styles.title}>{props.case}</h1>

      <img className={styles.img} src={props.img} alt="background" />
    </div>
  )
}

export default HeroSection
