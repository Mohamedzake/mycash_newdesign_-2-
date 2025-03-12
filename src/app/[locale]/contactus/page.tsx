import ContactUs from "../../../components/ContactUs2";
import Footer from "../../../components/Footer";
import WhatsApp from "../../../components/WhatsApp";
import ContactUsToday from "../../../components/ContactUsToday";
const GetInTouch = () => {
  return (
    <section>
      <div className="bg-video_gif bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
        <WhatsApp />
      </div>
      <ContactUsToday />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default GetInTouch;
