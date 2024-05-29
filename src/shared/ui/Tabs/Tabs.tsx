import styles from "./Tabs.module.scss"

import type { FC } from "react"
import type { ITabsComponent } from "./TabsType"

const Tabs: FC<ITabsComponent> = ({ onChange, tags, value }) => {
  const selectStyle = {
    backgroundColor: "rgba(95, 191, 119, 1)",
    color: "rgba(255, 255, 255, 1)",
  }

  const chooseHandler = e => {
    onChange(e.target.id)
  }

  return (
    <div className={styles.tabs} onClick={chooseHandler}>
      <li
        className={styles.tabs__element}
        style={value === "" ? selectStyle : undefined}
      >
        Все темы
      </li>
      {tags.map(tag => (
        <li
          id={tag}
          className={styles.tabs__element}
          key={tag}
          style={tag === value ? selectStyle : undefined}
        >
          {tag}
        </li>
      ))}
    </div>
  )
}

export default Tabs
