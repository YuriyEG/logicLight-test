import styles from "./Sidebar.module.scss"

import type { ISidebarComponent } from "./SidebarType"
import type { FC } from "react"

import Tab from "../../shared/ui/Tab"

import Tabs from "../../shared/ui/Tabs"

const Sidebar: FC<ISidebarComponent> = ({ handleChange, tags, value }) => {
  return (
    <aside className={styles.sidebar}>
      <Tabs>
        <Tab
          label=""
          title={"Все темы"}
          handleChange={handleChange}
          value={value}
        />
        {tags.map(node => (
          <Tab
            label={node}
            title={node}
            key={node}
            value={value}
            handleChange={handleChange}
          />
        ))}
      </Tabs>
    </aside>
  )
}

export default Sidebar
