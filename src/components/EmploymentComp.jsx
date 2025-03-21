import styles from "./Employment.module.css";

export default function EmploymentComp() {
  return (
    <div className={styles.main}>
      <div>
        <h3>WORK WITH US</h3>
      </div>

      <div>
        <p>
          We are located at Chandellux Imperial Hotel & Suits, with staff that
          counts some of the employees with over 5 years of experience. We are
          always looking for creative, honest and ambitious people to fulfill
          our clients demand and extend our current offerings .
        </p>
      </div>

      <p>Currently we have following positions open:</p>

      <li>Hair Stylist</li>
      <li>Natural Hair Stylist</li>
      <li>Pedicurist / Manicurist</li>
      <li>Braider</li>
      <li>Massage Therapists</li>
    </div>
  );
}
