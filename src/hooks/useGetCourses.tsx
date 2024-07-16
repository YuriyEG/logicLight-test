import { useState } from "react"
import { useEffect } from "react"

import type { ICourse } from "../types/api.type"

const useGetCourses = () => {
  const [courses, setCourses] = useState<ICourse[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setFetching(true)
    setError(false)
    fetch(`https://logiclike.com/docs/courses.json`, {
      method: "GET",
    })
      .then((res: Response) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json() as Promise<ICourse[]>
      })
      .then(res => {
        setCourses(res)
        setFetching(false)
        setError(false)

        let box: string[] = []
        res.forEach(node => {
          box = [...box, ...node.tags]
        })
        const tagList = [...new Set(box)]
        setTags(tagList)
      })
      .catch(() => {
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
