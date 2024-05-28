import styles from "./Tabs.module.scss"

const Tabs = ({ onChange, tags, value }) => {
  return (
    <div className={styles.tabs} onClick={e => onChange(e.target.id)}>
      <li
        className={styles.tabs__element}
        style={
          value === ""
            ? {
                backgroundColor: "rgba(95, 191, 119, 1)",
                color: "rgba(255, 255, 255, 1)",
              }
            : null
        }
      >
        Все темы
      </li>
      {tags.map(tag => (
        <li
          id={tag}
          className={styles.tabs__element}
          key={tag}
          style={
            tag === value
              ? {
                  backgroundColor: "rgba(95, 191, 119, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }
              : null
          }
        >
          {tag}
        </li>
      ))}
    </div>
  )
}

export default Tabs
