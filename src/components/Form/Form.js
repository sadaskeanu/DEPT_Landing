import styles from './Form.module.css'

function Form() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>QUESTION? WE ARE HERE TO HELP!</h2>
      <form className={styles.form} id="contact">
        <label>
          <p className={styles.dataTitle}>NAME</p>
          <input className={styles.input}></input>
        </label>
        <label>
          <p className={styles.dataTitle}>EMAIL</p>
          <input className={styles.input}></input>
        </label>
        <label>
          <p className={styles.dataTitle}>MESSAGE</p>
          <textarea className={styles.textarea}></textarea>
        </label>
        <button className={styles.button}>SEND</button>
      </form>
    </div>
  )
}

export default Form
