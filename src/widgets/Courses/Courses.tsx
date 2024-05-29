import styles from "./Courses.module.scss"
import CourseCard from "../../features/CourseCard"
import type { FC } from "react"
import type { ICoursesComponent } from "./CoursesType"

const Courses: FC<ICoursesComponent> = ({ courses }) => {
  return (
    <div className={styles.courses}>
      <ul className={styles.courses__list}>
        {courses.map(course => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </div>
  )
}

export default Courses
