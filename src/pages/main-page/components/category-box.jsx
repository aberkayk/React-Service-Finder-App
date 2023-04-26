import { Link } from "react-router-dom";
import styles from "./category-box.module.css";

export default function CategoryBox({ category }) {
  return (
    <div className="service-item position-relative h-100">
      <div className="service-text h-100 rounded p-5">
        <div
          className={`btn-square bg-light rounded-circle mx-auto mb-4 ${styles.button}`}
        >
          <img className="img-fluid" src={category.image} alt="Icon" />
        </div>
        <h5 className="mb-3">{category.name}</h5>
        <p className="mb-0">{category.description}</p>
      </div>
      <div className="service-btn rounded-0 rounded-bottom">
        <Link to={`category/${category.slug}`} className="text-primary fw-medium" >Read More<i
          className="bi bi-chevron-double-right ms-2"></i></Link>
      </div>
    </div>
  );
}