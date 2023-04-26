import React from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";


function MyLink(props) {
  const newProps = { ...props, className: "text-decoration-none text-black" }
  return <Link {...newProps} />
}

function CategoryPage() {
  const { categoryState } = useSelector((state) => state);
  console.log(categoryState);

  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-5">Categories</h1>
      {categoryState.categories.map((category, index) => {
        return (
          <div key={category.id} className="w-50">
            <ListGroup as="ul" className="my-1">

              <ListGroup.Item
                variant="primary text-black"
              >
                <MyLink to={`/category/${category.slug}`}>{index + 1}- {category.name}</MyLink>
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryPage;
