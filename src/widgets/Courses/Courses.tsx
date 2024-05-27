import styles from "./Courses.module.scss"
import CourseCard from "../../features/CourseCard"

import useGetCourses from "../../hooks/useGetCourses"

const Games = ({ courses }) => {
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

export default Games
