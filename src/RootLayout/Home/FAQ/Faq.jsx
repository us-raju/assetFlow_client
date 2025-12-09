import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "motion/react-client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpneIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpneIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is AssetFlow and how does it work?",
      answer: (
        <p>
          {" "}
          AssetFlow is a centralized asset management system where companies can
          track all their office equipment. Employees can request assets, and
          admins can approve and track usage.
        </p>
      ),
    },
    {
      question: "Who can use the system?",
      answer: (
        <>
          There are two user types:
          <ul className="list-disc ml-5">
            <li>Employees – they can request assets and check status</li>
            <li>
              Admins/HR Managers – they manage assets, approve requests, and
              track assignments
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Can employees manage assets?",
      answer: (
        <>
          <ul className="list-disc ml-5">
            <p>No</p>
            <li>Employees can only request assets.</li>
            <li>
              {" "}
              management, approvals, and tracking are controlled by Admin/HR
              roles.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: " How do employees request an asset?",
      answer: (
        <p className="text-gray-600 mt-3">
          Employees log in and fill a simple form with asset type andreason. The
          request goes to the Admin/HR dashboard for approval.
        </p>
      ),
    },
    {
      question: " How do admins approve or reject requests?",
      answer: (
        <p className="text-gray-600 mt-3">
          {" "}
          Admins review pending requests, check asset availability, and manually
          approve or reject with a single click.
        </p>
      ),
    },
    {
      question: "Can we track which employee is using which asset?",
      answer: (
        <p className="text-gray-600 mt-3">
          Yes, Once an asset is assigned, the system logs who is using it and
          updates the asset’s status automatically.
        </p>
      ),
    },
    {
      question: " Is there a limit to how many assets we can add?",
      answer: (
        <p className="text-gray-600 mt-3">
          No. You can add unlimited assets and categorize them by department,
          type, or location.
        </p>
      ),
    },
    {
      question: "Can we update or replace an assigned asset?",
      answer: (
        <p className="text-gray-600 mt-3">
          Yes, admins can update asset details, reassign items, mark them for
          repair, or replace them with new ones.
        </p>
      ),
    },
    {
      question: "What happens when an employee leaves the company?",
      answer: (
        <p className="text-gray-600 mt-3">
          Admins can mark the employee as inactive and reassign or return all
          previously issued assets back to inventory.
        </p>
      ),
    },
    {
      question: "Is the data secure?",
      answer: (
        <p className="text-gray-600 mt-3">
          Yes. All asset records, user accounts, and activity logs follow secure
          authentication and authorization rules to protect company data.
        </p>
      ),
    },
  ];
  return (
    <>
      <section className="mt-20">
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          FAQ
        </h2>

        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="border-b py-4 cursor-pointer"
            >
              <button className="flex justify-between w-full text-left cursor-pointer">
                <span className="text-lg text-primary font-semibold">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
