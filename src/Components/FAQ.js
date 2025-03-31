import React, { useState } from "react";
import "./Faq.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "../Assests/faq.jpg";

const faqData=[
  {
    question: "What is Dinex Restaurant WebApp?",
    answer:
      "Dinex is a web-based restaurant management system that streamlines ordering, payments, and table reservations.",
  },
  {
    question: "Is there some offers on items ?",
    answer:
      "Yes! We provide offers and discounts on special days or weekends.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can browse our menu, add items to your cart, and proceed to checkout for seamless ordering.",
  },
  {
    question: "Is there a delivery option available?",
    answer:
      "Yes! We provide delivery services within select locations. Check your area for availability.",
  },
];

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container faq-container">

<div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
      <div className="row">

        <div className="col-md-6 faq-section">
          <h2>Frequently Asked Questions</h2>
          
          {faqData.map((item,index)=>(
<div key={index} className="faq-item">

  <div className="faq-question" onClick={()=> toggleFAQ(index)}>
  <span>{item.question}</span>

  <span className="icon">{openIndex === index? <FaMinus/> :<FaPlus/>}</span>
</div>

<div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                {item.answer}
              </div>
           

</div>
          ) )}      
        </div>

        <div className="col-md-6  img-section">
          <img src={Image} alt="FAQ" className="faq-image" />
        </div>
      </div>
    </div>
  );
};

export default FAQ; 