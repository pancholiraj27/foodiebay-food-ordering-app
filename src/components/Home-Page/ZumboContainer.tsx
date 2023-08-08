import SearchBox from "./SearchBox";
import ZumboNav from "./ZumboNav";

const ZumboContainer = () => {
  return (
    <div className="zumboContainer">
      <ZumboNav />
      <section className="zumboHeading">
        <h1>Foodiebay</h1>
        <p className="slogan">Discover the best food & drinks in Bengaluru</p>
        <SearchBox />
      </section>
    </div>
  );
};

export default ZumboContainer;
