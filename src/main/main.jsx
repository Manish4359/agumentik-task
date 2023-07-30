import React from "react";
import styles from "./main.module.css";
import FeatureBox from "../featureBox/featureBox";
import RatingBar from "./../ratingBar/ratingBar";
import img1 from "./../f1.png";
import img2 from "./../f2.png";
import img3 from "./../f3.png";

function Main() {
  return (
    <div className={styles.main}>
      <section className={styles.section1}>
        <div>
          <p className={styles.headline}>
            Experience the craft of <br />
            survey creation
          </p>
          <p className={styles.text}>
            Easily design your survey in a matter of minutes.Access your
            audience on all platforms.
            <br />
            Observe results visually and in real-time.
          </p>
          <button className={styles.demoBtn}> Request a demo</button>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.feat}>
          <div className={styles.featText}>
            <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
              You can create a survey quick and easy process
            </p>
            <p style={{ padding: "20px 0" }}>
              Create a survey in just minutes and analyze responses in seconds
              with ease
            </p>
          </div>
          <div className={styles.review}>
            <p>
              <RatingBar />
              Trustport
            </p>
            <p> Impressive 4.8 rating from 13,000+ customers</p>
          </div>
        </div>
        <div className={styles.features}>
          <FeatureBox
            text={"Mobile Surveys"}
            desc={
              "No more screen size limitations! with our ceratile survey platform you can create surveys that seamlessly adapt to all devices"
            }
          >
            <img src={img1} style={{ height: "50px", width: "50px" }} />
          </FeatureBox>

          <FeatureBox
          text={'Acquire Feedback'}
          desc={'Don\'t have a large following? No problem!Simply s[ecify your target audience and we\'ll gather their opinions from you'}
          >
            <img src={img2} style={{ height: "50px", width: "50px" }} />
          </FeatureBox>

          <FeatureBox
          text={'collaborations'}
          desc={'Pool  your resoureces.Combine efforts with others to maximize the impact of your surveys, whether that means inviting collegues.'}
          >
            <img src={img3} style={{ height: "50px", width: "50px" }} />
          </FeatureBox>
        </div>
      </section>
    </div>
  );
}

export default Main;
