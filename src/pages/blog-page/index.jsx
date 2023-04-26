import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function BlogPage() {
  const { blogState } = useSelector(state => state)
  console.log(blogState.blogs);

  function MyLink(props) {
    const newProps = { ...props, className: "text-decoration-none text-black" }
    return <Link {...newProps} />
  }

  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-5">Blogs</h1>
      {blogState.blogs.map((blog, index) => {
        return (
          <div key={blog.id} className="w-50">
            <ListGroup as="ul" className="my-1">

              <ListGroup.Item
                variant="primary text-black"
              >
                <MyLink to={`/blogs/${blog.slug}`}>{index + 1}- {blog.title}</MyLink>
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
    </div>
  )
}

export default BlogPage