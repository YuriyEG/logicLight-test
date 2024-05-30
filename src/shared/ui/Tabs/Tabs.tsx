import styles from "./Tabs.module.scss"

import type { FC } from "react"
import type { ITabsComponent } from "./TabsType"

const Tabs: FC<ITabsComponent> = ({ children }) => {
  return <div className={styles.tabs}>{children}</div>
}

export default Tabs
