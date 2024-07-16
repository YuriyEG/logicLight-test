import styles from "./App.module.scss"

import type { ICourse } from "../types/api.type"
import type { FC } from "react"

import { useState } from "react"
import useGetCourses from "../hooks/useGetCourses"

import Courses from "../widgets/Courses"
import Sidebar from "../widgets/Sidebar"

const App: FC = () => {
  const [value, setValue] = useState("")
  const { courses, tags } = useGetCourses()

  const setTagHandler: (value: string) => void = value => {
    setValue(value)
  }

  let coursesList: ICourse[] = []
  if (!value) {
    coursesList = courses
  } else {
    coursesList = courses.filter(node => node.tags.includes(value))
  }

  return (
    <div className={styles.app}>
      <Sidebar handleChange={setTagHandler} value={value} tags={tags} />
      <Courses courses={coursesList} />
    </div>
  )
}

export default App
