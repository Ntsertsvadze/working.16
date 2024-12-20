import BacklogItem from "./BacklogItem"
import styles from './tickets.module.css'

const BacklogWrapper = () => {
    const tickets = [1, 2, 3, 4, 5]
    return (
        <div className={styles.ticketWrapper}>
            {tickets.map((ticket) => <BacklogItem key={ticket} ticket={ticket}/>)}
        </div>
    )
}
export default BacklogWrapper