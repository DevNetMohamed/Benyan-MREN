import CardStatus from "../../ui/CardStatus/CardStatus";
export default function Status() {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <CardStatus
                counter="120"
                title="Projects"
                icon="fa-solid fa-building"
              />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus
                counter="120"
                title="Projects"
                icon="fa-solid fa-building"
              />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus
                counter="120"
                title="Projects"
                icon="fa-solid fa-building"
              />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus
                counter="120"
                title="Projects"
                icon="fa-solid fa-building"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
