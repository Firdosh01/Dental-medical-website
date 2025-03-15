import { IoIosArrowDropright } from "react-icons/io";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import Reveal from "../components/common/Reveal";

const About = () => {
  return (
    <div
      style={{
        background: "var(--linear-gradient-3)",
      }}
    >
      <Navbar navbarBgColor={"#ffffff"} />
      <div className="max_width_container !mt-[90px]">
        <div className="h1_semibold text-[var(--dark-blue-color)] capitalize flex justify-center items-center">
          <div className="flex gap-3">
            <div className="relative !z-[999]">
              About Us
              <div className="absolute sm:!top-[-32px] !top-[-20px] left-0 !z-[9]">
                <img
                  src="/assets/logos/welcoming-underline.png"
                  alt=""
                  className="w-[276px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Reveal>
          <div className="!mt-[70px] flex gap-[70px]  justify-end lg:flex-row flex-col 2xl:!px-[0px] !px-[20px]">
            <div className="lg:!w-[649px]">
              <div className="h2_semibold text-[var(--dark-blue-color)]">
                Our Mission
              </div>
              <div className="b1_regular text-[var(--body-text-color)] !mt-[20px]">
                At Northern Heights Dental, people come first. We help each of
                our patients to achieve optimal wellness and health by using a
                whole body approach to oral health. This means not just focusing
                on cavities, but focusing on; cranio-facial development, bite
                and joint balance, oral flora, proper muscle balance/function,
                and bio-compatibility of dental materials. Great care and
                planning ensure that everything we do helps promote overall
                health and well being.
              </div>
              <div className="h4_medium text-[var(--dark-blue-color)] !mt-[32px]">
                More than anything else we love creating happy, healthy smiles.
              </div>
              <div className="b1_regular text-[var(--body-text-color)] !mt-[44px]">
                We work hard to stay up to date with the most advanced
                techniques and technologies to ensure that our patients receive
                the best care possible. Our office utilizes 3D CBCT radiographs
                to allow for guided surgical and endodontic protocols. This
                enables these procedures to performed digitally before they are
                performed surgically to ensure optimal results. 3D imaging also
                is utilized for the analysis of airway growth and development.
                We also use the best 3D optical scanner for all of our dental
                restoration and Invisalign impressions. Dr Williams is a strong
                advocate for using microsurgical techniques, this means less
                discomfort and faster healing times.
              </div>
            </div>
            <div>
              <img src="/assets/images/about/about-img.png" alt="" />
            </div>
          </div>
        </Reveal>

        <div className="!mt-[100px] xl:!mx-[0px] !mx-[20px]">
          <div className="flex sm:justify-center sm:items-center flex-col ">
            <div className="flex flex-col gap-[20px] max-w-[479px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] sm:text-center">
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  Meet Our
                  <div className="relative !z-[999]">
                    Specialists
                    <div className="absolute sm:top-[-37px] top-[-25px] left-0 !z-[9]">
                      <img
                        src="/assets/logos/welcoming-underline.png"
                        alt=""
                        className="w-[276px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[var(--body-text-color)] b1_regular sm:text-center">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </div>
            </div>
          </div>
          <div className="flex flex-col !mt-[50px] gap-[50px] ">
            <Reveal>
              <div className="flex gap-[30px] lg:justify-center lg:items-center lg:flex-row flex-col">
                <div>
                  <img
                    src="/assets/images/about/specialist-img-1.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:max-w-[729px]">
                  <div className="flex lg:items-center gap-[12px] lg:flex-row flex-col">
                    <div className="h4_semibold text-[var(--dark-blue-color)]">
                      DR. Brent
                    </div>
                    <div className="b2_regular text-[var(--dark-blue-color)]">
                      ( Specility in General & Cosmetic Service )
                    </div>
                  </div>
                  <div className="b1_regular text-[var(--body-text-color)] !my-[23px]">
                    Dr. Brent provides general and cosmetic dentistry services
                    at Northern Heights Dental in Flagstaff, Arizona. He has
                    extensive experience in general and cosmetic dentistry,
                    including full mouth restoration, dental veneers, crowns,
                    bridges, dental implants, wisdom teeth extractions,
                    Invisalign, and dentures. Dr. Brent and his younger sister
                    grew up in Massachusetts with a mother who worked as a
                    hygienist and a grandfather who was a general dentist.
                  </div>
                  <div className="sm:w-fit flex justify-center">
                    <Button>Book an appointment</Button>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-[30px] lg:justify-center lg:items-center lg:flex-row flex-col">
                <div>
                  <img
                    src="/assets/images/about/specialist-img-2.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:max-w-[729px]">
                  <div className="flex sm:items-center gap-[12px] sm:flex-row flex-col">
                    <div className="h4_semibold text-[var(--dark-blue-color)]">
                      DR. Ashish J. Vashi
                    </div>
                    <div className="b2_regular text-[var(--dark-blue-color)]">
                      ( Specility in implant dentistry )
                    </div>
                  </div>
                  <div className="b1_regular text-[var(--body-text-color)] !my-[23px]">
                    Dr. Ashish J. Vashi has been practicing general, cosmetic
                    and implant dentistry in California for over 18 years. He
                    believes in giving the highest quality dentistry in a
                    comfortable, caring environment. He strives to get to know
                    his patients, not just their teeth.including full mouth
                    restoration, dental veneers, crowns, bridges, dental
                    implants, wisdom teeth extractions, Invisalign, and
                    dentures.
                  </div>
                  <div className="sm:w-fit flex justify-center">
                    <Button>Book an appointment</Button>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-[30px] lg:justify-center lg:items-center lg:flex-row flex-col">
                <div>
                  <img
                    src="/assets/images/about/specialist-img-3.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:max-w-[729px]">
                  <div className="flex sm:items-center sm:flex-row flex-col gap-[12px]">
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
                    your day with his seasoned expertise, welcoming
                    conversations, and – of course – his signature rotation of
                    fun bowties. Dr. Connors and his younger sister grew up in
                    Massachusetts with a mother who worked as a hygienist and a
                    grandfather who was a general dentist.
                  </div>
                  <div className="sm:w-fit flex justify-center">
                    <Button>Book an appointment</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="!mt-[118px] ">
          <div className="flex sm:justify-center sm:items-center flex-col 2xl:!mx-[0px] !mx-[20px]">
            <div className="flex flex-col gap-[20px] max-w-[592px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] sm:text-center">
                <div className="flex gap-3 sm:justify-center items-center">
                  Latest
                  <div className="relative !z-[999]">
                    Technology
                    <div className="absolute sm:!top-[-37px] !top-[-27px] left-0 !z-[9]">
                      <img
                        src="/assets/logos/welcoming-underline.png"
                        alt=""
                        className="w-[276px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[var(--body-text-color)] b1_regular sm:text-center">
                Thanks to major technological advancements, dentistry allows
                treating the most complex cases with less time and more
                efficiency.
              </div>
            </div>
          </div>
          <Reveal>
            <div className="flex sm:gap-[20px] gap-[40px] justify-between !mt-[70px] sm:flex-row flex-col 2xl:!mx-[0px] !mx-[20px]">
              <div>
                <img
                  src="/assets/images/about/technology-img-1.png"
                  alt=""
                  className="w-full hfull"
                />
              </div>
              <div className="flex flex-col gap-[20px] xl:max-w-[728px] md:max-w-[70%]">
                <div className="h4_medium text-[var(--dark-blue-color)]">
                  The Future of Dentistry is Digital
                </div>
                <div className="b1_regular text-[var(--body-text-color)] ">
                  Dentists today already utilize software to capture insights in
                  clinical decision-making. These practices will continue to
                  develop to integrate AI algorithms that enable clinicians to
                  find the best modalities for their patients.
                  <br />
                  <br />
                  In the 21st century, digital radiographs and 3D imaging have
                  become the standard of dental care. Using an intraoral scanner
                  with digitized data for 3D dental impressions (vs. polyvinyl
                  siloxane and rubber base impressions) for a dental crown is
                  now commonplace. <br />
                  <br /> Artificial intelligence is laying the groundwork for
                  the future of the dental industry. Dental robots can now
                  perform functions such as filling cavities and cleaning or
                  extracting teeth
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-[var(--dark-blue-color)] !py-10 sm:!px-8 !px-[20px] 2xl:rounded-xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lace-items-center !mt-[132px]  gap-y-[20px] xl:!gap-x-[20px] gap-x-[10px]">
              <div className="xl:w-[387px] w-full h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
                <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
                  <img
                    src="/assets/logos/teeth-1.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                </div>
                <div className="h4_medium text-[var(--dark-blue-color)]">
                  Root Canal Treatment
                </div>
                <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
                  Root canal treatment (endodontics) is a dental procedure used
                  to treat infection at the centre of a tooth.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] w-full h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
                <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
                  <img
                    src="/assets/logos/teeth-1.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                </div>
                <div className="h4_medium text-[var(--dark-blue-color)]">
                  Root Canal Treatment
                </div>
                <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
                  Cosmetic dentistry is the branch of dentistry that focuses on
                  improving the appearance of your smile.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] w-full h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
                <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
                  <img
                    src="/assets/logos/teeth-1.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                </div>
                <div className="h4_medium text-[var(--dark-blue-color)]">
                  Root Canal Treatment
                </div>
                <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="!my-[100px]  xl:!mx-[0px] !mx-[20px]">
            <div className="flex flex-col justify-center items-center gap-[40px]">
              <Reveal>
                <div className="flex flex-col gap-[20px] max-w-[629px] justify-center items-center">
                  <div className="h2_semibold text-[var(--dark-blue-color)] capitalize text-center md:block hidden">
                    <div className="flex gap-3">
                      {" "}
                      We’re
                      <div className="relative !z-[999]">
                        welcoming
                        <div className="absolute top-[-37px] left-0 !z-[9]">
                          <img
                            src="/assets/logos/welcoming-underline.png"
                            alt=""
                            className="w-[276px]"
                          />
                        </div>
                      </div>
                      new patients
                    </div>
                    <div>and can’t wait to meet you.</div>
                  </div>
                  <div className="h2_semibold text-[var(--dark-blue-color)] capitalize md:hidden block">
                    <div className="flex gap-3">
                      {" "}
                      We’re
                      <div className="relative !z-[999]">
                        welcoming
                        <div className="absolute sm:!top-[-37px] !top-[-28px] left-0 !z-[9]">
                          <img
                            src="/assets/logos/welcoming-underline.png"
                            alt=""
                          />
                        </div>
                      </div>
                      new
                    </div>
                    <div>patients and can’t wait to meet you.</div>
                  </div>
                  <div className="b1_regular text-[var(--body-text-color)] xl:text-center max-w-[463px]">
                    We use only the best quality materials on the market in
                    order to provide the best products to our patients.
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <img src="/assets/images/video-img-1.png" alt="" />
                </div>
              </Reveal>

              <div className="w-fit">
                <Button>Watch Playlist</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
