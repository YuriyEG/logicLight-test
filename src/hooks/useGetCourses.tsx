import { useState } from "react"
import { useEffect } from "react"

const useGetCourses = () => {
  const [courses, setCourses] = useState([])
  const [tags, setTags] = useState([])
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setFetching(true)
    setError(false)
    fetch(`https://logiclike.com/docs/courses.json`, {
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

        let box = []
        res.forEach(node => {
          box = [...box, ...node.tags]
        })
        const tagList = [...new Set(box)]
        setTags(tagList)
      })
      .catch(err => {
        setFetching(false)
        setError(true)
      })
  }, [])

  return {
    courses,
    tags,
    fetching,
    error,
  }
}

export default useGetCourses
