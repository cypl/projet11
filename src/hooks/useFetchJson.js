import { useEffect } from 'react'

export const useFetchJson = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setData((c) => (c = data)))
  }, [url, setData])
}
