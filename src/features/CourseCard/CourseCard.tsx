import styles from "./CourseCard.module.scss"

import type { FC } from "react"
import type { ICourseCardComponent } from "./CourseCardType"

const CourseCard: FC<ICourseCardComponent> = ({ course }) => {
  return (
    <li key={course.id} className={styles["course-card"]}>
      <figure className={styles.figure}>
        <p
          className={styles["image-wrapper"]}
          style={{ backgroundColor: `${course.bgColor}` }}
        >
          <img src={course.image} alt={course.name} className={styles.image} />
        </p>

        <figcaption className={styles.title}>{course.name}</figcaption>
      </figure>
    </li>
  )
}

export default CourseCard
