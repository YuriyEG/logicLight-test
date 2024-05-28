import "./App.scss"
import Sidebar from "./widgets/Sidebar"
import Courses from "./widgets/Courses"

import { useState } from "react"
import useGetCourses from "./hooks/useGetCourses"

const App = () => {
  const [value, setValue] = useState("")
  const { courses, tags } = useGetCourses()

  const setTagHandler = value => {
    setValue(value)
  }

  let coursesList = []
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
