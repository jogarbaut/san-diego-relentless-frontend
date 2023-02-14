import { useState } from "react"
import axios from "axios"

const PostForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [markdown, setMarkdown] = useState("")
  const [date, setDate] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/post", {
      title,
      description,
      markdown,
      date
    }, { withCredentials: true })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="title">Title:</label>
      <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="description">Description:</label>
      <input name="description" type="text" onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor="markdown">Body:</label>
      <input name="markdown" type="text" onChange={(e) => setMarkdown(e.target.value)} />
      <label htmlFor="date">Date:</label>
      <input name="date" type="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
