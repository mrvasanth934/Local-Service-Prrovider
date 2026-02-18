import "./Css/Category.css";
import categoryImage from "../assets/electricity.jpg";
const Category = () => {
  return (
   <>
   <hr className="category-hr" />
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
            <div className="img">
              <img src={categoryImage} alt="" />
            </div>
            <div className="status">
              <h6>21 Online</h6>
            </div>
            <div className="about-category">
              <h4>Home Cleaning</h4>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
          </div>
          <div className="categoryimg">
            <div className="img">
              <img src={categoryImage} alt="" />
            </div>
            <div className="status">
              <h6>21 Online</h6>
            </div>
            <div className="about-category">
              <h4>Plumbing</h4>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
          </div>
          <div className="categoryimg">
            <div className="img">
              <img src={categoryImage} alt="" />
            </div>
            <div className="status">
              <h6>21 Online</h6>
            </div>
            <div className="about-category">
              <h4>Electrical</h4>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
          </div>
          <div className="categoryimg">
            <div className="img">
              <img src={categoryImage} alt="" />
            </div>
            <div className="status">
              <h6>21 Online</h6>
            </div>
            <div className="about-category">
              <h4>Carpentry</h4>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="category-hr" />
   </>
  );
};

export default Category;
