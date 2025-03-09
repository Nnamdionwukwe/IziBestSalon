import { useState } from "react";
import styles from "./Approach.module.css";

export default function Approach() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function handleClose1() {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  }
  function handleClose2() {
    setIsOpen2(true);
    setIsOpen1(false);
    setIsOpen3(false);
  }
  function handleClose3() {
    setIsOpen3(true);
    setIsOpen2(false);
    setIsOpen1(false);
  }

  return (
    <>
      <div className={styles.approachDiv} onClick={handleClose1}>
        <div>
          <div>
            <p className={isOpen1 ? styles.one : styles.general1}>01</p>
          </div>

          <div>
            <p className={isOpen1 ? styles.innovation : styles.general2}>
              INNOVATION
            </p>
          </div>
        </div>

        {isOpen1 && (
          <div>
            <p className={styles.const1}>CONSTRUCTIVE THINKING</p>

            <p className={styles.const2}>
              Each style is dependent on lifestyle, figure and facial structure.
              We innovate by combining best practices with new methods and
              trends to reach the perfect fit.
            </p>

            <p className={styles.const3}>RESULT</p>

            <p className={styles.const4}>
              A personalized look that is meticulously crafted to match
              personality and perspective.
            </p>
          </div>
        )}
      </div>

      <div className={styles.approachDiv} onClick={handleClose2}>
        <div>
          <div>
            <p className={isOpen2 ? styles.one : styles.general1}>02</p>
          </div>

          <div>
            <p className={isOpen2 ? styles.innovation : styles.general2}>
              PRECISION
            </p>
          </div>
        </div>

        {isOpen2 && (
          <div>
            <p className={styles.const1}>OUR PROCESS</p>

            <p className={styles.const2}>
              We begin with a discovery and conversation, quickly moving to
              strategy and visual mapping. This process allows our stylist to
              visualize the desired results and carefully plan the process to
              achieve them.
            </p>

            <p className={styles.const3}>RESULT</p>

            <p className={styles.const4}>
              Client and stylist are aligned on the final result, understanding
              the approach to reach the ultimate look.
            </p>
          </div>
        )}
      </div>

      <div className={styles.approachDiv} onClick={handleClose3}>
        <div>
          <div>
            <p className={isOpen3 ? styles.one : styles.general1}>03</p>
          </div>

          <div>
            <p className={isOpen3 ? styles.innovation : styles.general2}>
              PERFECTION
            </p>
          </div>
        </div>

        {isOpen3 && (
          <div>
            <p className={styles.const1}>THE GOAL</p>

            <p className={styles.const2}>
              Our standards are exacting and we aim for perfection in every
              form. Uniquely designed to renew, strengthen and motivate - we
              provide guests with the latest in salon and spa treatments
              indulged with a rejuvenating atmosphere.
            </p>

            <p className={styles.const3}>RESULT</p>

            <p className={styles.const4}>
              The true essence of style. An enhanced version of yourself will
              shine with confidence.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
