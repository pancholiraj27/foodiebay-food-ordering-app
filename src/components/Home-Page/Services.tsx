// it is used on home page
import "./Services.css";
const Services = (props: any) => {
  const { title, description, id, img, link } = props.item;
  return (
    <div className="servicesBox">
      <a href={link} className="aTag">
        <div className="baseImg">
          <img src={img} alt={title} />
        </div>
        <section className="aboutServiceDetail">
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
      </a>
    </div>
  );
};

export default Services;
