import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './index.module.css';



function CategoryDetailsPage() {
  const params = useParams()
  const { categoryState } = useSelector(state => state)

  console.log(categoryState);
  const myCategory = categoryState.categories.find(item => item.slug === params.categoryId)
  console.log(myCategory);


  return (
    <div className='d-flex justify-content-center my-5'>
      <Card className='mb-5'>
        <Card.Img variant="top" src={myCategory.image} className={`${styles.img} mx-auto`} />
        <Card.Body>
          <Card.Title className='mb-4'>
            <b>{myCategory.name}</b>
          </Card.Title>
          <hr />
          <Card.Text>
            <b>ID:</b> {myCategory.id}
          </Card.Text>
          <Card.Text>
            <b>Description:</b> {myCategory.description}
          </Card.Text>
          <Card.Text>
            <b>Status:</b> {myCategory.status}
          </Card.Text>
          <Card.Text>
            <b>Updated At:</b> {myCategory.updated_at}
          </Card.Text>
          <Link to="/"><Button variant="primary">Home Page</Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryDetailsPage