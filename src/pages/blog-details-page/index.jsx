import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './index.module.css';



function BlogDetailsPage() {
  const params = useParams()
  const { blogState } = useSelector(state => state)

  const myBlog = blogState.blogs.find(item => item.slug === params.blogId)


  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-center my-5 w-50'>
        <Card className='mb-5'>
          <Card.Img variant="top" src={myBlog.image} className={`${styles.img} mx-auto`} />
          <Card.Title className='text-center mt-5'>{myBlog.title}</Card.Title>
          <Card.Body>
            <Card.Title>
              <b>{myBlog.name}</b>
            </Card.Title>
            <Card.Text>
              {myBlog.content}
            </Card.Text>
            <Link to="/blogs"><Button variant="primary">Blogs</Button></Link>
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}

export default BlogDetailsPage