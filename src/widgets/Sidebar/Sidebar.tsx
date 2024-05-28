import styles from "./Sidebar.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { withStyles } from "@mui/styles"

const Sidebar = ({ handleChange, value, tags }) => {
  return (
    <aside className={styles.sidebar}>
      <Tabs
        value={value}
        orientation="vertical"
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Все темы" value="" className={styles.sidebar__tab} />
        {tags.map(tag => (
          <Tab label={tag} value={tag} />
        ))}
      </Tabs>
    </aside>
  )
}

export default Sidebar
