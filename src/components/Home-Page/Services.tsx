// it is used on home page
import { Link } from "react-router-dom";
import "./Services.css";
const Services = (props: any) => {
  const { title, description, id, img, link } = props.item;
  return (
    <div className="servicesBox">
      <Link to={link} className="aTag">
        <div className="baseImg">
          <img src={img} alt={title} />
        </div>
        <section className="aboutServiceDetail">
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
      </Link>
    </div>
  );
};

export default Services;
