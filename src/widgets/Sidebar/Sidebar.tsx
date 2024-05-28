import styles from "./Sidebar.module.scss"
import Tabs from "../../shared/ui/Tabs"

const Sidebar = ({ handleChange, tags, value }) => {
  return (
    <aside className={styles.sidebar}>
      <Tabs onChange={handleChange} tags={tags} value={value} />
    </aside>
  )
}

export default Sidebar
