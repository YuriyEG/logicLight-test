import styles from "./Sidebar.module.scss"

import type { ISidebarComponent } from "./SidebarType"
import type { FC } from "react"

import Tabs from "../../shared/ui/Tabs"

const Sidebar: FC<ISidebarComponent> = ({ handleChange, tags, value }) => {
  return (
    <aside className={styles.sidebar}>
      <Tabs onChange={handleChange} tags={tags} value={value} />
    </aside>
  )
}

export default Sidebar
