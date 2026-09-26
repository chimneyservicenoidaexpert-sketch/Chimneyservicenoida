"use client"
import { useState, useEffect } from "react"
export default function Typewriter({ texts }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  useEffect(() => {
    if (subIndex === texts[index].length + 1 &&!reverse) {
      setTimeout(()=> setReverse(true), 1500)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse? -1 : 1))
    }, reverse? 50 : 120)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, texts])
  return (
    <span style={{color:'#ff3b30',borderRight:'3px solid black',paddingRight:'4px'}}>
      {`${texts[index].substring(0, subIndex)}`}
    </span>
  )
}
