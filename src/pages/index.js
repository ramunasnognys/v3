import React from "react";
import { Link } from "gatsby";
import Layout from "../layouts";
import "../styles/init.scss";

const Home = () => {
  return (
    <main>
      <section className="container hero">
        <div className="wrapper">
          <div className="hero__inner">
            <p>Hi, my name is</p>
            <h2 className="hero__title"> Ramūnas Nognys </h2>
            <p className="hero__text">
              I‘m a front-end web developer from Vilnius currently working with
              ReactJS.
            </p>
            <button className="btn hero__btn"> Contact Me</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
