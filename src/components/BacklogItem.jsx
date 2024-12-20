import styles from './tickets.module.css'

const BacklogItem= ({ticket}) => {
    return (
        <div className={styles.ticketItem}>
            <p className={styles.ticketLot}>{ticket}</p>
        </div>
    )
}
export default BacklogItem

  