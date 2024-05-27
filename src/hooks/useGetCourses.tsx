import { useState } from "react"
import { useEffect } from "react"

const useGetCourses = tags => {
  const [courses, setCourses] = useState([])
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const [fullFilled, setFullfilled] = useState(false)

  useEffect(() => {
    setFetching(true)
    setError(false)
    setFullfilled(false)
    fetch("https://logiclike.com/docs/courses.json", {
      method: "GET",
    })
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(res => {
        setCourses(res)
        setFetching(false)
        setError(false)
        setFullfilled(true)
      })
      .catch(err => {
        setFetching(false)
        setFullfilled(false)
        setError(true)
      })
  }, [tags])

  return {
    courses,
    fetching,
    fullFilled,
    error,
  }
}

export default useGetCourses
