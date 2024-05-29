import styles from "./CourseCard.module.scss"

const CourseCard = ({ course }) => {
  return (
    <li key={course.id} className={styles.courseCard}>
      <figure className={styles.courseCard__figure}>
        <p
          className={styles.courseCard__imageWrapper}
          style={{ backgroundColor: `${course.bgColor}` }}
        >
          <img
            src={course.image}
            alt={course.name}
            className={styles.courseCard__image}
          />
        </p>

        <figcaption className={styles.courseCard__title}>
          {course.name}
        </figcaption>
      </figure>
    </li>
  )
}

export default CourseCard
