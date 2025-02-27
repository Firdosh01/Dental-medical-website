import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";

const About = () => {
  return (
    <div
      style={{
        background: "var(--linear-gradient-3)",
      }}
    >
      <Navbar navbarBgColor={"#ffffff"} />
      <div className="max_width_container !mt-[80px]">
        <div className="h1_semibold text-[var(--dark-blue-color)] capitalize flex justify-center items-center">
          <div className="flex gap-3">
            <div className="relative !z-[999]">
              About Us
              <div className="absolute top-[-32px] left-0 !z-[9]">
                <img
                  src="/assets/logos/welcoming-underline.png"
                  alt=""
                  className="w-[276px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="!mt-[70px] flex gap-[70px]  justify-end">
          <div className="!w-[649px]">
            <div className="h2_semibold text-[var(--dark-blue-color)]">
              Our Mission
            </div>
            <div className="b1_regular text-[var(--body-text-color)] !mt-[20px]">
              At Northern Heights Dental, people come first. We help each of our
              patients to achieve optimal wellness and health by using a whole
              body approach to oral health. This means not just focusing on
              cavities, but focusing on; cranio-facial development, bite and
              joint balance, oral flora, proper muscle balance/function, and
              bio-compatibility of dental materials. Great care and planning
              ensure that everything we do helps promote overall health and well
              being.
            </div>
            <div className="h4_medium text-[var(--dark-blue-color)] !mt-[32px]">
              More than anything else we love creating happy, healthy smiles.
            </div>
            <div className="b1_regular text-[var(--body-text-color)] !mt-[44px]">
              We work hard to stay up to date with the most advanced techniques
              and technologies to ensure that our patients receive the best care
              possible. Our office utilizes 3D CBCT radiographs to allow for
              guided surgical and endodontic protocols. This enables these
              procedures to performed digitally before they are performed
              surgically to ensure optimal results. 3D imaging also is utilized
              for the analysis of airway growth and development. We also use the
              best 3D optical scanner for all of our dental restoration and
              Invisalign impressions. Dr Williams is a strong advocate for using
              microsurgical techniques, this means less discomfort and faster
              healing times.
            </div>
          </div>
          <div>
            <img src="/assets/images/about/about-img.png" alt="" />
          </div>
        </div>
        <div className="!mt-[100px]">
          <div className="flex justify-center items-center flex-col ">
            <div className="flex flex-col gap-[20px] max-w-[479px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] text-center">
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  Meet Our
                  <div className="relative !z-[999]">
                    Specialists
                    <div className="absolute top-[-37px] left-0 !z-[9]">
                      <img
                        src="/assets/logos/welcoming-underline.png"
                        alt=""
                        className="w-[276px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[var(--body-text-color)] b1_regular text-center">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </div>
            </div>
          </div>
          <div className="flex flex-col !mt-[50px] gap-[50px]">
            <div className="flex gap-[30px] justify-center items-center">
              <div className="">
                <img
                  src="/assets/images/about/specialist-img-1.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="max-w-[729px]">
                <div className="flex items-center gap-[12px]">
                  <div className="h4_semibold text-[var(--dark-blue-color)]">
                    DR. Brent
                  </div>
                  <div className="b2_regular text-[var(--dark-blue-color)]">
                    ( Specility in General & Cosmetic Service )
                  </div>
                </div>
                <div className="b1_regular text-[var(--body-text-color)] !my-[23px]">
                  Dr. Brent provides general and cosmetic dentistry services at
                  Northern Heights Dental in Flagstaff, Arizona. He has
                  extensive experience in general and cosmetic dentistry,
                  including full mouth restoration, dental veneers, crowns,
                  bridges, dental implants, wisdom teeth extractions,
                  Invisalign, and dentures. Dr. Brent and his younger sister
                  grew up in Massachusetts with a mother who worked as a
                  hygienist and a grandfather who was a general dentist.
                </div>
                <div className="w-fit">
                  <Button>Book an appointment</Button>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-center items-center">
              <div className="">
                <img
                  src="/assets/images/about/specialist-img-2.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="max-w-[729px]">
                <div className="flex items-center gap-[12px]">
                  <div className="h4_semibold text-[var(--dark-blue-color)]">
                    DR. Ashish J. Vashi
                  </div>
                  <div className="b2_regular text-[var(--dark-blue-color)]">
                    ( Specility in implant dentistry )
                  </div>
                </div>
                <div className="b1_regular text-[var(--body-text-color)] !my-[23px]">
                  Dr. Ashish J. Vashi has been practicing general, cosmetic and
                  implant dentistry in California for over 18 years. He believes
                  in giving the highest quality dentistry in a comfortable,
                  caring environment. He strives to get to know his patients,
                  not just their teeth.including full mouth restoration, dental
                  veneers, crowns, bridges, dental implants, wisdom teeth
                  extractions, Invisalign, and dentures.
                </div>
                <div className="w-fit">
                  <Button>Book an appointment</Button>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-center items-center">
              <div className="">
                <img
                  src="/assets/images/about/specialist-img-3.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="max-w-[729px]">
                <div className="flex items-center gap-[12px]">
                  <div className="h4_semibold text-[var(--dark-blue-color)]">
                    Dr. James Connors
                  </div>
                  <div className="b2_regular text-[var(--dark-blue-color)]">
                    ( Specility in Oral Surgeon )
                  </div>
                </div>
                <div className="b1_regular text-[var(--body-text-color)] !my-[23px]">
                  When it comes to oral surgeons, few can compare to the
                  modern-day legend that is Dr. James Connors. As our oral and
                  maxillofacial surgery specialist, Dr. Connors will brighten
                  your day with his seasoned expertise, welcoming conversations,
                  and – of course – his signature rotation of fun bowties. Dr.
                  Connors and his younger sister grew up in Massachusetts with a
                  mother who worked as a hygienist and a grandfather who was a
                  general dentist.
                </div>
                <div className="w-fit">
                  <Button>Book an appointment</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
