// import { FaBuilding } from "react-icons/fa";
import { useState } from "react";
import CardStatus from "../../ui/CardStatus/CardStatus";
// import { TbBuildingCommunity, TbUserCog } from "react-icons/tb";
// import { LuUserRoundSearch } from "react-icons/lu";

export default function Status() {
  const [states, setState] = useState([
    { id: 1, counter: "500", title: "Projects", icon: "" },
    { id: 2, counter: "500", title: "Developer", icon: "" },
    { id: 3, counter: "500", title: "ToProject", icon: "" },
    { id: 4, counter: "500", title: "ToProject", icon: "" },
  ]);

  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            {states.map((item) => {
              return (
                <div className="col-12 col-md-3" key={item.id}>
                  <CardStatus
                    counter={item.counter}
                    title={item.title}
                    icon={item.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
