import styles from "./CartProject.module.css"; // ← named import

const STATUS_STYLES = {
  Active: styles["status--active"],
  Pending: styles["status--pending"],
  Completed: styles["status--completed"],
};

export default function CartProject({
  image,
  status,
  title,
  developer,
  units,
  startPrice,
  onEdit,
}) {
  return (
    <div className={styles["cart-project"]}>
      <CartImage image={image} alt={title} status={status} />
      <CartBody
        title={title}
        developer={developer}
        units={units}
        startPrice={startPrice}
        onEdit={onEdit}
      />
    </div>
  );
}

function CartImage({ image, alt, status }) {
  return (
    <div className={styles["cart-project__image-wrapper"]}>
      <img src={image} alt={alt} className={styles["cart-project__image"]} />
      <StatusBadge status={status} />
    </div>
  );
}

function CartBody({ title, developer, units, startPrice, onEdit }) {
  return (
    <div className={styles["cart-project__body"]}>
      <CartInfo title={title} developer={developer} units={units} />
      <hr className={styles["cart-project__divider"]} />
      <CartFooter startPrice={startPrice} onEdit={onEdit} />
    </div>
  );
}

function CartInfo({ title, developer, units }) {
  return (
    <div className={styles["cart-project__info"]}>
      <h5 className={styles["cart-project__title"]}>{title}</h5>
      <p className={styles["cart-project__developer"]}>{developer}</p>
      <UnitsBadge units={units} />
    </div>
  );
}

function CartFooter({ startPrice, onEdit }) {
  return (
    <div className={styles["cart-project__footer"]}>
      <div className={styles["cart-project__price"]}>
        <span className={styles["cart-project__price-label"]}>Start Price</span>
        <span className={styles["cart-project__price-value"]}>
          {startPrice}
        </span>
      </div>
      <EditButton onEdit={onEdit} />
    </div>
  );
}

function StatusBadge({ status }) {
  const cls = STATUS_STYLES[status] || styles["status--active"];
  return (
    <span className={`${styles["cart-project__status"]} ${cls}`}>{status}</span>
  );
}

function UnitsBadge({ units }) {
  return (
    <span className={styles["cart-project__units"]}>
      <span className={styles["cart-project__units-icon"]}>🏢</span>
      {units} Units
    </span>
  );
}

function EditButton({ onEdit }) {
  return (
    <button className={styles["cart-project__edit-btn"]} onClick={onEdit}>
      EDIT
    </button>
  );
}
