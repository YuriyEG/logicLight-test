import "./App.css"
import Sidebar from "./widgets/Sidebar"
import Courses from "./widgets/Courses"

import { useState } from "react"
import useGetCourses from "./hooks/useGetCourses"

const App = () => {
  const [tag, setTag] = useState(0)
  const [query, setQuery] = useState(0)
  const { courses } = useGetCourses(tag)
  console.log(courses)

  const setTagHandler = (_, value) => {
    setTag(value)
  }
  return (
    <div className="App">
      <Sidebar handleChange={setTagHandler} value={tag} />
      <Courses courses={courses} />
    </div>
  )
}

export default App
