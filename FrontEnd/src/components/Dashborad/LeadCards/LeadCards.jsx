import Style from "./LeadCards.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function LeadCards() {
  return (
    <div className="container-fluid px-0">
      <div className={`row g-0 ${Style.wrapper}`}>
        <div className={`col-9 ${Style.cartLeft}`}>
          <div className={Style.watermark}>↗</div>

          <h3 className={Style.title}>New Lead Generation Insights</h3>
          <p className={Style.desc}>
            Your Leads Bot has identified 12 high-priority prospective buyers in
            the last 24 hours. Review matching portfolios to increase
            conversion.
          </p>
          <button className={Style.btn}>Review New Leads</button>
        </div>

        <div className={`col-3 ${Style.system}`}>
          <span className={Style.systemLabel}>SYSTEM HEALTH</span>
          <div className={Style.systemPercent}>99.8%</div>
          <div className={Style.systemStatus}>
            <FaCheckCircle className={Style.checkIcon} />
            <span>Operational</span>
          </div>
          <div className={Style.progressBar}>
            <div className={Style.progressFill}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
