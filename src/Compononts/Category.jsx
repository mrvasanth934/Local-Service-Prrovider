import "./Css/Category.css";
import categoryImage from "../assets/electricity.jpg";
const Category = () => {
  return (
    <div className="categorys">
      <div className="category-container">
        <div className="top">
          <h2>Browse by category </h2>
          <div className="category-lists">
            <p className="list">Home Cleaning</p>
            <p className="list">Plumbing</p>
            <p className="list">Electrical</p>
            <p className="list">Carpentry</p>
          </div>
        </div>
        <div className="bottom">
          <div className="categoryimg">
            <img src={categoryImage} alt=""  />
            <div>
              <h3>Home Cleaning</h3>
              </div>
          </div>
          <div className="categoryimg">
            <img src={categoryImage} alt=""  />
            <div>
              <h3>Plumbing Services</h3>
              </div>
          </div>
           <div className="categoryimg">
            <img src={categoryImage} alt=""  />
            <div>
              <h3>Electrical Service</h3>
              </div>
          </div>
           <div className="categoryimg">
            <img src={categoryImage} alt=""  />
            <div>
              <h3>Carpentry Services</h3>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category;
