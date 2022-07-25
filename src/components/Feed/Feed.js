import cx from 'classnames'

import ClientCard from '../ClientCard/ClientCard'
import ClientNote from '../ClientNote/ClientNote'
import ClientQuote from '../ClientQuote/ClientQuote'

import content from '../../content/content'

import styles from './Feed.module.css'

function Feed() {
  return (
    <div className={styles.wrap}>
      {content.map((item, index) => {
        if (item.type === 'client') {
          const isLarge = content[index + 1]?.type === 'note'

          return (
            <div
              key={`${item.type}-${index}`}
              className={cx(styles.card, {
                [styles.isLarge]: isLarge,
                [styles.isReversed]: item.isReversed
              })}
            >
              <ClientCard
                brand={item.brand}
                title={item.title}
                coverUrl={item.coverUrl}
              />
            </div>
          )
        }
        if (item.type === 'note') {
          return (
            <div key={`${item.type}-${index}`} className={styles.note}>
              <ClientNote clients={item.clients} />
            </div>
          )
        }

        if (item.type === 'quote') {
          return (
            <div key={`${item.type}-${index}`} className={styles.quote}>
              <ClientQuote
                quote={item.clientquote.quote}
                name={item.clientquote.name}
              />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default Feed
