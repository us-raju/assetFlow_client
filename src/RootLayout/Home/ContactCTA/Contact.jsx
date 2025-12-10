import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mt-20">
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Stay Connected with AssetFlow
        </h2>
        <p className="text-[12px] md:text-[18px] text-secondary text-center mb-5">
          Our team is ready to help you streamline your asset tracking and
          management
        </p>
        <div className="form_container">
          <form className="fieldset bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto ">
            <label className="label text-primary font-semibold">Name</label>
            <input
              required
              type="name"
              className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary w-full"
              placeholder="Type Your Full Name"
            />

            <label className="label text-primary font-semibold">Email</label>
            <input
              required
              type="email"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Type Your Email Address"
            />
            <label className="label text-primary font-semibold">Phone Number</label>
            <input
              required
              type="tel"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Type Your Phone Number"
            />
            <label className="label text-primary font-semibold">Company / Organization</label>
            <input
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Type Your Company / Organization Name"
            />
            <label className="label text-primary font-semibold">Message</label>
            <textarea
              required
              className="textarea text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full resize-none"
              
              placeholder="Type Your Message"
            ></textarea>

            <button type="submit" className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
