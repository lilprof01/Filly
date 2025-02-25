import { useState, useRef } from "react";
import Modal from "./Components/modal";
import Error from "./Components/Error";

const Form = () => {
  const [active, setActive] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const radioRef1 = useRef<HTMLInputElement>(null);
  const radioRef2 = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const handleActive = (value: string): void => {
    setActive(value);
  };

  const handleE = (id: string): void => {
    setError(id);
  };

  const handleErrormessage = (id: string): void => {
    setErrorMessage(id);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (fNameRef.current?.value === "") {
      handleE("1");
      handleErrormessage("1");
      fNameRef.current?.setAttribute("aria-invalid", "true");
    } else if (lNameRef.current?.value === "") {
      handleE("2");
      handleErrormessage("2");
      lNameRef.current?.setAttribute("aria-invalid", "true");
    } else if (emailRef.current?.value === "") {
      handleE("3");
      handleErrormessage("3");
      emailRef.current?.setAttribute("aria-invalid", "true");
    } else if (radioRef1.current?.checked === false && radioRef2.current?.checked === false) {
      handleE("4");
      handleErrormessage("4");
    } else if (messageRef.current?.value === "") {
      handleE("5");
      handleErrormessage("5");
      messageRef.current?.setAttribute("aria-invalid", "true");
    } else if (!consentRef.current?.checked) {
      handleE("6");
      handleErrormessage("6");
    } else {
      setError(null);
      // Handle form submission
      console.log("Submitted");
      setShowModal(true);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  };

  return (
    <div>
      {showModal && <Modal message="Thank you for your message. We'll get back to you as soon as possible." />}
      <form onSubmit={handleSubmit}>
        <h1 style={{
          color: 'hsl(169, 82%, 27%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>Contact Us</h1>
        {/* Name */}
        <div className="double-input">
          <div className="input-div" id="1">
            <label htmlFor="firstName">
              First Name<span>*</span>
            </label>
            <input
              ref={fNameRef}
              className={`${error === "1" ? "error" : "no-error"}`}
              type="text"
              name="firstName"
              placeholder="e.g John"
            />
            {errorMessage === "1" && <Error errorMessage="This field is required" role="alert" ariaLive="assertive" id="errorMessage" />}
          </div>

          <div className="input-div" id="2">
            <label htmlFor="lastName">
              Last Name<span>*</span>
            </label>
            <input
              ref={lNameRef}
              className={`${error === "2" ? "error" : "no-error"}`}
              type="text"
              name="lastName"
              placeholder="e.g Doe"
            />
            {errorMessage === "2" && <Error errorMessage="This field is required" role="alert" ariaLive="assertive" id="errorMessage" />}
          </div>
        </div>

        {/* Email */}
        <div className="input-div" id="3">
          <label htmlFor="email">
            Email Address<span>*</span>
          </label>
          <input
            ref={emailRef}
            className={`${error === "3" ? "error" : "no-error"}`}
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          {errorMessage === "3" && <Error errorMessage="Please enter a valid email address" role="alert" ariaLive="assertive" id="errorMessage" />}
        </div>

        {/* Query */}
        <div
          style={{
            width: "100%",
          }}
          className="input-div"
          id="4"
        >
          <label htmlFor="queryType">
            Query Type<span>*</span>
          </label>
          <div className="double-input">
            <div className={`query ${active === "1" ? "active" : ""}`}>
              <input
                ref={radioRef1}
                onClick={() => handleActive("1")}
                type="radio"
                name="query"
                value="1"
                id="generalEnquiry"
              />
              <label>General Enquiry</label>
            </div>

            <div className={`query ${active === "2" ? "active" : ""}`}>
              <input
                ref={radioRef2}
                onClick={() => handleActive("2")}
                type="radio"
                name="query"
                value="2"
                id="supportRequest"
              />
              <label>Support Request</label>
            </div>
          </div>
          {errorMessage === "4" &&<Error errorMessage="Please select a query type" role="alert" ariaLive="assertive" id="errorMessage" />}
        </div>

        {/* Message */}
        <div className="input-div" id="5">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            ref={messageRef}
            className={`${error === "5" ? "error" : "no-error"}`}
            name="message"
            id="message"
          ></textarea>
          {errorMessage === "5" && <Error errorMessage="This field is required" role="alert" ariaLive="assertive" id="errorMessage" />}
        </div>

        {/* Consent */}
        <div className="input-div" id="6">
          <div className="consent">
            <input ref={consentRef} type="checkbox" />
          <p>
            I consent to being contacted by the team <span>*</span>
          </p>
          </div>
          {errorMessage === "6" && <Error errorMessage="To submit this form, please consent to being contacted." role="alert" ariaLive="assertive" id="errorMessage" />}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
