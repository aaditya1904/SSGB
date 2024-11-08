import React from "react";
import './Contact.css'
export default function Contact() {
  return (
    <><div className="frame text-center">
       <table>
        <tr>
            <td class="label">Email Address:</td>
            <td class="contact-info">
                <a href="mailto:#">
                    <button class="contact-button">Click Here</button>
                </a>
            </td>
        </tr>
        <tr>
            <td class="label">Contact Number:</td>
            <td class="contact-info">
                <a href="tel:+919009084104">
                    <button class="contact-button">Click Here</button>
                </a>
            </td>
        </tr>
        <tr>
            <td class="label">Alternate Contact No.:</td>
            <td class="contact-info">
                <a href="tel :+91934085870">
                    <button class="contact-button">Click Here</button>
                </a>
            </td>
        </tr>
    </table>

      <h3>
        Our Location
      </h3>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.2674849841956!2d77.09376317514376!3d22.343526779655495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d71ee861d40e1%3A0xc7422a1bc634fdcf!2sSSGB%20H.%20SEC.%20SCHOOL!5e0!3m2!1sen!2sin!4v1731083962486!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </>
  );
}
