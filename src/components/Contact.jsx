const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c7f3f3ae-ae5e-46c0-9388-fe4d3080b20c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Contact
          </p>
          <p className="text-white font-bold tex-xl py-4">
            Submit the form below or shoot me an email -
            aymen.bachiri99@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2 outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let us Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
