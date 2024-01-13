import React, { useEffect, useState } from 'react';
import { getFaqs } from '../../api/Api';
import './faq.css'
import Layout from '../../Components/Layout/Layout';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    getAllFaqs();
  }, []);

  const getAllFaqs = async () => {
    let response = await getFaqs();
    setFaqs(response.data);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <Layout>
      <div className="container">
        <div className="accordion accordion-flush border mt-5" id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <div
              className={`accordion-item ${activeAccordion === index ? 'active-accordion' : ''}`}
              key={faq._id}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded={activeAccordion === index ? 'true' : 'false'}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.faqheading}
                </button>
              </h2>
              <div id={`faqCollapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{faq.faqparagraph}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
}

export default Faq;
