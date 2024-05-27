import styles from "./Sidebar.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

const Sidebar = ({ handleChange, value }) => {
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
        <Tab label="Все темы" />
        <Tab label="Логика и мышление" />
        <Tab label="Загадки" />
        <Tab label="Головоломки" />
        <Tab label="Путешествия" />
      </Tabs>
    </aside>
  )
}

export default Sidebar
