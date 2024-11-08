import React from "react";
import Image from "./download.jpg";
import "../Bootstrap/bootstrap.bundle.js";
import "../Bootstrap/bootstrap.css";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="about-holder">
        <h1 className="dark">Welcome to SSGB School</h1>
        <div className="content">
          <img src={Image} alt="Image of School" className="img" />
          <p>
            We believe that School should be fun and students should feel loved
            and blessed in a lively enviroment that nourishes their
            independence. We offer to partner and collaborate with you valuing
            your child’s unique way to a sound growth through a strong
            education. You will see your children enjoying life here as you
            experience their formidable transformation by the culture we harness
            in SSGB.
            <br />
            Everything has a purpose and SSGB has it in meeting each student’s
            innocent needs and genuine expectations. Children are always at the
            center of all that we do. They have plentiful of opportunities to
            interplay with the dynamic Schooling activities they feel happy
            about, enabling them to choose their own pathway to an acclaimed
            life.
          </p>
        </div>
        <div>
          We take pride in maintaining a balanced student-teacher ratio,
          ensuring personalized attention and a focused learning experience for
          every child. Our dedicated and qualified faculty are passionate about
          nurturing young minds and encouraging their potential to excel both
          inside and outside the classroom. Safety is a top priority at SSGB.
          The entire campus is equipped with CCTV cameras for enhanced security,
          providing peace of mind to both parents and staff. Our comprehensive
          approach to safety ensures a secure environment where students can
          focus on their studies and personal growth. At SSGB, we believe in
          creating a community of learners who are not only academically
          successful but also socially responsible and emotionally well-rounded.
          We strive to empower each student to achieve their best and become
          lifelong learners.
        </div>
        <br />
        <div className="card-grid row">
          <div className=" card founder ">
            <div className="border border-1">founders image</div>
            <h2> Founder's Desk</h2>
            SSGB H.S. School was established in 2003 with the vision of
            providing quality education and fostering an environment that
            supports holistic development. Founded by Adv. Devendra Singh
            Rajput, our school has grown to become a well-respected institution
            known for its commitment to academic excellence and the well-being
            of its students.
          </div>
          <div className=" card principal ">
            <div className="border border-1">founders image</div>
            <h2> Principal's Desk</h2>
            SSGB H.S. School was established in 2003 with the vision of
            providing quality education and fostering an environment that
            supports holistic development. Founded by Mrs. Kanchan Rajput, our
            school has grown to become a well-respected institution known for
            its commitment to academic excellence and the well-being of its
            students.
          </div>
        </div>
      </div>
    </>
  );
}
