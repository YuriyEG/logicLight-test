import "./App.scss"
import Courses from "../widgets/Courses"
import Sidebar from "../widgets/Sidebar"

import useGetCourses from "../hooks/useGetCourses"
import type { ICourse } from "../types/api"
import type { FC } from "react"

import { useState } from "react"
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
    <div className="App">
      <Sidebar handleChange={setTagHandler} value={value} tags={tags} />
      <Courses courses={coursesList} />
    </div>
  )
}

export default App
