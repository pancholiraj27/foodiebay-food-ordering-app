import ZumboNav from "./ZumboNav";

const ZumboContainer = () => {
  return (
    <div className="zumboContainer">
      <ZumboNav />
      <section className="zumboHeading">
        <h1>Tomato</h1>
        <p className="slogan">Discover the best food & drinks in Bengaluru</p>
      </section>
    </div>
  );
};

export default ZumboContainer;
