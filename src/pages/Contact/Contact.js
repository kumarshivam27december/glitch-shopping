import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error states
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // Email validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages have been received successfully. Further details will be sent to you via email at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50 rounded-lg shadow-md p-6">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-full text-center font-medium text-green-600 bg-green-50 p-4 rounded-lg">
          {successMsg}
        </p>
      ) : (
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl text-blue-600 mb-4">
            Fill out the Form
          </h1>
          <div className="w-full max-w-md mx-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2 text-pink-600">
                Name
              </p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-2 border-b-2 border-pink-300 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-pink-500 transition-all"
                type="text"
                placeholder="Enter your name here"
              />
              {errClientName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errClientName}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2 text-green-600">
                Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full py-2 border-b-2 border-green-300 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-green-500 transition-all"
                type="email"
                placeholder="Enter your email here"
              />
              {errEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2 text-yellow-600">
                Messages
              </p>
              <textarea
                onChange={handleMessages}
                value={messages}
                cols="30"
                rows="4"
                className="w-full py-2 border-b-2 border-yellow-300 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-yellow-500 transition-all resize-none"
                placeholder="Enter your message here"
              ></textarea>
              {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errMessages}
                </p>
              )}
            </div>
            <button
              onClick={handlePost}
              className="w-44 bg-blue-500 text-white h-12 font-titleFont text-base tracking-wide font-semibold rounded-lg hover:bg-blue-700 duration-200 mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
