import "./portfoliolist.css";
import Portfolio from "../portfolio/Portfolio";
import { projects } from "../../data";
const Portfoliolist = () => {
  return (
    <div>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Projects and Jobs in the University</h1>
          <p className="pl-desc">
          Projects and works carried out during the engineering degree in electronics and telecommunications
          </p>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
            <Portfolio key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoliolist;
