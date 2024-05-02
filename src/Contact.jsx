import { contactInfo } from "./data";
const Contact = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-start pt-12 w-full bg-[#e2e8f0] gap-8 items-start sm:px-56 px-8 xl:pl-72">
      <h2 className="text-[#577790] sm:text-[40px] font-playfair text-[28px] font-semibold leading-[120%] mt-4 ">
        Contact Information
      </h2>
      <div>
        {contactInfo.map((contact) => (
          <div key={contact.id}>
            <h2 className="text-[#436a75] sm:text-[32px] font-playfair text-[24px] font-semibold leading-[120%] mt-4 ">
              {contact.name}
            </h2>
            <p className="text-[#436a75] sm:text-[22px] text-[18px] font-playfair">
              {contact.title}
            </p>
            <p className="text-[#436a75] sm:text-[22px] text-[18px] font-playfair">
              {contact.university}
            </p>
            <p className="text-[#436a75] sm:text-[22px] text-[18px] font-playfair">
              {contact.address}
            </p>
            <a href="mailto:alirgh90@gmail.com">
              <p className="text-[#436a75] sm:text-[22px] text-[18px] font-playfair">
                {contact.email}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
