import moment from 'moment'
import { Button } from 'react-bootstrap'

const FeaturedPostEditorRow = ({ featuredPost, setSelectedFeaturedPostId, setShowEditFeaturedPostModal }) => {
  const handleSelectedFeaturedPostToEdit = () => {
    setSelectedFeaturedPostId(featuredPost._id)
    setShowEditFeaturedPostModal(true)
  }

  return (
    <tr>
      <td>{moment.utc(featuredPost.date).format("MM-DD-YY")}</td>
      <td>{featuredPost.title}</td>
      <td>{featuredPost.description.substring(0, 20)}...</td>
      <td><Button onClick={handleSelectedFeaturedPostToEdit}>Edit</Button></td>
    </tr>
  )
}

export default FeaturedPostEditorRow