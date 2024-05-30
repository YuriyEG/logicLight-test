import styles from "./Tab.module.scss"
import { type FC } from "react"
import type ITabComponent from "./TabType"

const Tab: FC<ITabComponent> = ({ label, title, handleChange, value }) => {
  const selectStyle = {
    backgroundColor: "rgba(95, 191, 119, 1)",
    color: "rgba(255, 255, 255, 1)",
  }

  const selectHandler = () => {
    handleChange(label)
  }
  return (
    <li
      className={styles.tab}
      onClick={selectHandler}
      style={value === label ? selectStyle : undefined}
    >
      {title}
    </li>
  )
}

export default Tab
