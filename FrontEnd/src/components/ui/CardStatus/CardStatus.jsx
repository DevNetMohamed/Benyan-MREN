import styles from "./CardStatus.module.css";

export default function CardStatus({ icon, counter, title }) {
  return (
    <div className={styles.cardStatus}>
      {/* Icon */}
      <div className={styles.Icon}>{icon}</div>

      {/* Info */}
      <div className={styles.Info}>
        <span className={styles.counter}>{counter}</span>

        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}
