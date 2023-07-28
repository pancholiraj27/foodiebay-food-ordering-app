import Services from "../../components/Home-Page/Services";
import ZumboContainer from "../../components/Home-Page/ZumboContainer";
import servicesData from "../../data/services.json";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <ZumboContainer />
      <div className="servicesSection">
        {servicesData.map((item) => {
          return <Services item={item} />;
        })}
      </div>
    </div>
  );
};
export default Home;
