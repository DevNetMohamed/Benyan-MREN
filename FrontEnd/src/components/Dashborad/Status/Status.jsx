import { FaBuilding } from "react-icons/fa";
import CardStatus from "../../ui/CardStatus/CardStatus";
import { TbBuildingCommunity, TbUserCog } from "react-icons/tb";
import { LuUserRoundSearch } from "react-icons/lu";
export default function Status() {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <CardStatus
                counter="500"
                title="Total Projects"
                icon={<FaBuilding />}
              />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus
                counter="42"
                title="Active Developer"
                icon={<TbUserCog />}
              />
            </div>

            <div className="col-12 col-md-3">
              <CardStatus
                counter="1,840"
                title="Total Units"
                icon={<TbBuildingCommunity />}
              />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus
                counter="512"
                title="Total Leads"
                icon={<LuUserRoundSearch />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
