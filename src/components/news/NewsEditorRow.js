import moment from 'moment'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsEditorRow = ({ post, setSelectedPostId, setShowEditPostEditorModal }) => {
  const handleSelectedPostToEdit = () => {
    setSelectedPostId(post._id)
    setShowEditPostEditorModal(true)
  }

  return (
    <tr>
      <td>{moment.utc(post.date).format("MM-DD-YY")}</td>
      <td>{post.title}</td>
      <td>{post.description.substring(0, 10)}</td>
      <td>{post.markdown.substring(0, 15)}</td>
      <td><Button onClick={handleSelectedPostToEdit}>Edit</Button></td>
    </tr>
  )
}

export default NewsEditorRow