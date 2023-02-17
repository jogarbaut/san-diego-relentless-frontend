import moment from 'moment'
import { Button } from 'react-bootstrap'

const NewsEditorRow = ({ post, setSelectedPostId, setShowEditPostEditorModal }) => {
  const handleSelectedPostToEdit = () => {
    setSelectedPostId(post._id)
    setShowEditPostEditorModal(true)
  }

  return (
    <tr>
      <td>{moment.utc(post.date).format("MM-DD-YY")}</td>
      <td>{post.title}</td>
      <td>{post.description.substring(0, 20)}...</td>
      <td>{post.markdown.substring(0, 30)}...</td>
      <td><Button onClick={handleSelectedPostToEdit}>Edit</Button></td>
    </tr>
  )
}

export default NewsEditorRow