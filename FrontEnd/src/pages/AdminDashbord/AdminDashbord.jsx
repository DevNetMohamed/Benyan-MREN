import LeadCards from "../../components/Dashborad/LeadCards/LeadCards";
import Status from "../../components/Dashborad/Status/Status";
import DevelopersPerformanceChart from "../../components/ui/Charts/DevelopersPerformanceChart/DevelopersPerformanceChart";
import ProjectPortfolioChart from "../../components/ui/Charts/ProjectPortfolioChart/ProjectPortfolioChart";

export default function AdminDashbord() {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div>
              <Status />
            </div>
            <div className="col-lg-7">
              <DevelopersPerformanceChart />
            </div>
            <div className="col-lg-5">
              <ProjectPortfolioChart />
            </div>
            <div>
              <LeadCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
