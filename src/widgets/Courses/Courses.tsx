import styles from "./Courses.module.scss"

import type { FC } from "react"
import type { ICoursesComponent } from "./CoursesType"

import CourseCard from "../../features/CourseCard"

const Courses: FC<ICoursesComponent> = ({ courses }) => {
  return (
    <div className={styles.courses}>
      <ul className={styles.list}>
        {courses.map(course => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </div>
  )
}

export default Courses
