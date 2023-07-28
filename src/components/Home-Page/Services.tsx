// type servicesProps = {
//   title: string;
//   id: number;
//   img: string;
//   description: string;
//   link: string;
// };

import "./Services.css";
const Services = (props: any) => {
  //   console.log(props, "from serivces tsx");
  const { title, description, id, img, link } = props.item;
  console.log("img", img, title, props);
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
