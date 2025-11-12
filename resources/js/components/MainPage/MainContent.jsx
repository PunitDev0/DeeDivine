import React from 'react';

const MainContent = ({
  enqForm,
  handleEnqFormChange,
  handleEnqFormSubmit,
  handleNavLinkClick
}) => {
  return (
    <>
      <div class="md:flex md:justify-center blue-bg-box">
        <div class="w-full h-full md:w-1/2 md:h-1/2 place-items-center">
          <div class="bg-blue-100 p-4 mt-4 rounded text-center text-black">
            <h2 class="text-2xl font-bold">RRITAM Peace Valley, Bahalgarh, Sector - 80, Sonipat</h2>
            <p>HRERA-PKL-SP-741-2025 dated on 11.08.2025	</p>
            <p class="mt-4 font-bold">REGISTRATION OPEN</p>
            <p class="mt-4 font-bold">(HARYANA GOVT. RESIDENTIAL PLOTS)</p>
          </div>
        </div>
      </div>

      <div className="amenities-bank" id="amenities-bank" style={{ background: '#f7f7f7' }}>
        <h2 className="cons-heading pb-2 text-center font-sans">The Project has been Approved By</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/hdfcbank.png" alt="HDFC Bank" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/icicibank.png" style={{ height: '100px', width: '80%' }} alt="ICICI Bank" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/ausmall.png" alt="AUSMALL Bank" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center pt-4">Plot owners can avail loans from these banks for financing purposes.</p>
      </div>

      <section className="pd-30 top-details">
        <div className="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="status-strip">
                <h4>Plots Starting</h4>
                <p>Price ₹1.19 Lac*</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="status-strip">
                <h4>Total No. of Plots</h4>
                <p>  30</p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="status-strip">
                <h4>Payment Plan</h4>
                <p>10:40:30:20</p>
              </div>
            </div>



            <div class="col-md-3">
              <div class="status-strip">
                <h4>HRERA-NO</h4>
                <p>HRERA-PKL-SNP-675-2025 dated on 19-03-2025</p>
              </div>
            </div>






          </div>
        </div>
      </section>

      <div className="bg-success text-white p-4">
        <div className="container">
          <div className=" flex flex-row w-full items-center justify-between">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h2 className="h4 h2-md mb-3">RRITAM Peace Valley, Bahalgarh, Sector - 80, Sonipat</h2>
              <p>HRERA-PKL-SP-741-2025 dated on 11.08.2025</p>
              {/* <a href="#" className="btn btn-danger px-4 py-2 fw-bold" data-bs-toggle="modal" data-bs-target="#registrationModal">
                EOI Registration Open
              </a> */}
              <a
                href="#"
                className="register-btn text-white fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
                style={{ textDecoration: 'none' }}
              >
                EOI Registration Open
              </a>
            </div>
            <div className=" text-center w-fit">
              <img src="images/rera-logo.png" alt="DDJAY Image" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <div class="amenities">
        <h2 class="cons-heading pb-2 text-center font-sans">
          RRITAM PEACE VALLEY BAHALGARH
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="cons-heading pb-2 text-center font-sans">
                FLOOR PLAN
              </h2>
              <img src="/images/floor_plan_new.png" class="w-100" />
            </div>

            <div class="col-lg-6">
              <h2 class="cons-heading pb-2 text-center font-sans">
                SITEPLAN
              </h2>
              <img src="/images/site.jpeg" class="w-100" />
            </div>
          </div>
        </div>
      </div>

<div className="amenities-pricing mt-20" id="amenities-pricing">
  <h2 className="cons-heading pb-2 text-center font-sans">Price List</h2>

  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="amenities-listing table-responsive position-relative">
          <table
            className="table table-bordered text-center w-100 border-collapse"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th className="main-th">Plot Size (Sq. Yd.)</th>
                <th className="main-th">Rate / Sq. Yd.</th>
                <th className="main-th">Registration Amount</th>
                <th className="main-th">10% On Allotment</th>
                <th className="main-th">
                  40% Within 30 Days
                  <br />
                  (Include 50% EDC/IDC)
                </th>
                <th className="main-th">
                  25% Within 90 Days
                  <br />
                  (Include 25% EDC/IDC)
                </th>
                <th className="main-th">
                  25% On Possession
                  <br />
                  (Include 25% EDC/IDC)
                </th>
                <th className="main-th">Total Cost</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>145.697</td>
                <td>₹80,000</td>
                <td>₹31,000</td>
                <td>₹11,34,576.00</td>
                <td>₹47,93,431.30</td>
                <td>₹29,79,503.65</td>
                <td>₹29,79,503.65</td>
                <td><b>₹1,19,18,014.60</b></td>
              </tr>

              <tr>
                <td>158.159</td>
                <td>₹80,000</td>
                <td>₹31,000</td>
                <td>₹12,34,272.00</td>
                <td>₹52,03,431.10</td>
                <td>₹32,34,351.55</td>
                <td>₹32,34,351.55</td>
                <td><b>₹1,29,37,406.20</b></td>
              </tr>

              <tr>
                <td>162.077</td>
                <td>₹80,000</td>
                <td>₹31,000</td>
                <td>₹12,65,616.00</td>
                <td>₹53,32,333.30</td>
                <td>₹33,14,474.65</td>
                <td>₹33,14,474.65</td>
                <td><b>₹1,32,57,898.60</b></td>
              </tr>

              <tr>
                <td>167.233</td>
                <td>₹80,000</td>
                <td>₹31,000</td>
                <td>₹13,06,864.00</td>
                <td>₹55,01,965.70</td>
                <td>₹34,19,914.85</td>
                <td>₹34,19,914.85</td>
                <td><b>₹1,36,79,659.40</b></td>
              </tr>

              <tr>
                <td>179.395</td>
                <td>₹80,000</td>
                <td>₹31,000</td>
                <td>₹14,04,160.00</td>
                <td>₹59,02,095.50</td>
                <td>₹36,68,627.80</td>
                <td>₹36,68,627.80</td>
                <td><b>₹1,46,74,511.00</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>





      <section className="pd-30 gallery" id="gallery">
        <div className="container">
          <div className="text-center">
            <h2 className="cons-heading font-sans">Gallery</h2>
          </div>
          <div className="row">
            {[
              'gal1.jpeg',
              'gal2.jpg',
              'gal3.jpg',
              'gal4.jpg',
              'gal5.jpg',
              // 'gal6.jpeg',
              // 'gal7.jpeg',
              // 'gal8.jpeg',
            ].map((image, index) => (
              <div className="col-md-4 p-0" key={index}>
                <a data-fancybox="gallery-images" href={`images/${image}`}>
                  <img src={`images/${image}`} className="img-fluid img-thumbnail w-100" alt={`Gallery Image ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div class="amenities " id="amenities">
        <h2 class="cons-heading pb-2 text-center font-sans">
          RRITAM Peace Valley, Bahalgarh, Sector - 80, Sonipat
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="amenities-listing">
                <p>Rritam Peace Valley offers the perfect blend of urban convenience and rural serenity, located in proximity from Delhi with excellent connectivity via the different national highways. Situated in the rapidly developing Bahalgarh Sonipat belt, it is close to NH-44, marking it as a key growth hub in the expanding Delhi NCR region. Sonipat is expected to witness a major real estate boom in the coming years. The project features 95 thoughtfully designed freehold plots ranging from 59.731 to 149.996 SQM (approx. 71.438 to 179.395 Sq. Yds. Fully approved under DDJAY by the Government of Haryana and sanctioned by the Town and Country Planning (TCP) department, the township includes modern amenities such as gated entry, STP, water tank, sewer lines, rainwater harvesting pit, LED streetlights, landscaped parks, play zones, water supply, etc. a truly Peaceful, Pollution free living experience.</p>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="amenities jst-pb" id="amenities">
        <div className="container">
          <h2 className="cons-heading pb-5 text-center font-sans">
            Location Advantages
          </h2>

          <div className="row">
            {/* Left Column - List */}
            <div className="col-md-6 col-sm-6">
              <div className="highlights-container">
                {[
                  { title: "NH334B", time: "5-min Drive Approx" },
                  { title: "KMP EXPRESSWAY", time: "7-8 min Drive Approx" },
                  { title: "UER-II", time: "30-min Drive Approx" },
                  { title: "NH44", time: "2-min Drive Approx" },
                  {
                    title: "Delhi - Katra Expressway",
                    time: "40 min Drive Approx",
                  },
                  { title: "Rishihood University", time: "10 min Drive Approx" },
                  { title: "IMT Kharkhoda", time: "20 min Drive Approx" },
                  {
                    title: "Upcoming Rajiv Gandhi Education City Metro Station",
                    time: "10 min Drive Approx",
                  },
                  {
                    title: "Dr. B.R Ambedkar National Law University",
                    time: "10 min Drive Approx",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="highlight-item flex items-start gap-2 mb-2"
                  >
                    <i className="fas fa-check-circle text-green-600 mt-1"></i>
                    <p>
                      <strong>{item.title} :</strong> {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="col-md-6 col-sm-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27925.437945809503!2d77.098417!3d28.967222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf007771e535%3A0xf0e3af382c54ea34!2sRritam%20Peace%20Valley!5e0!3m2!1sen!2sin!4v1761304075801!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="deendayal-yojna mt-20 px-4">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center font-sans pb-4 text-gray-800">
            About Deen Dayal Jan Awas Yojna (DDJAY)
          </h2>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="yojna-content text-justify leading-relaxed text-gray-700">
                <p className="mb-3">
                  <b>Deen Dayal Jan Awas Yojna (DDJAY)</b> is an affordable housing
                  policy launched by the Government of Haryana in 2016 to encourage
                  the development of plotted colonies in low and medium potential
                  towns of the state. The objective of this scheme is to provide
                  affordable and high-quality housing options for all sections of
                  society, particularly the middle-income and lower-income groups.
                </p>

                <p className="mb-3">
                  Under DDJAY, private developers are permitted to develop residential
                  plotted colonies on land ranging between 5 acres and 15 acres. The
                  plots are made available at affordable rates, ensuring planned
                  urbanization and adequate infrastructure such as roads, drainage,
                  parks, and community facilities. The scheme promotes balanced
                  regional growth while ensuring that housing remains within the reach
                  of common citizens.
                </p>

                <p className="mb-3">
                  The policy also encourages transparency, faster approvals, and
                  simplified development norms. Homebuyers benefit from clear land
                  titles, better connectivity, and a government-supported regulatory
                  framework. DDJAY projects are seen as ideal investment
                  opportunities, offering both affordability and long-term growth
                  potential.
                </p>

                <p className="font-medium mt-4">
                  <b>Key Benefits of DDJAY:</b>
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Affordable residential plots with clear titles.</li>
                  <li>Planned infrastructure and essential amenities.</li>
                  <li>Government-supported policy ensuring transparency.</li>
                  <li>Quick approval and development process for developers.</li>
                  <li>Encourages urban development in smaller towns and cities.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pd-60" id="developer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftr_rera"><span>HRERA-PKL-SP-741-2025 dated on 11.08.2025</span></div>
            </div>
            <div className="col-lg-12">
              <div className="develop">
                <div className="devep-img">
                  <div className="sub-devep" style={{ backgroundColor: 'white' }}>
                    <h4>A BRAND WITH LEGACY ETCHED IN EXCELLENCE.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Get a Callback</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pd-30">
              <form className="modal-form" onSubmit={handleEnqFormSubmit}>
                <div className="modal-form-section">
                  <div className="form-row p-2">
                    <input
                      type="text"
                      className="border-0 form-control"
                      placeholder="Name"
                      name="name"
                      value={enqForm.name}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="email"
                      className="border-0 form-control"
                      placeholder="Email"
                      name="email"
                      value={enqForm.email}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="tel"
                      className="border-0 form-control"
                      placeholder="Phone"
                      name="phone"
                      value={enqForm.phone}
                      onChange={handleEnqFormChange}
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="modal-submit text-center">
                    <button type="submit" className="modal-submit-btn">Request A Call</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="disclaimer text-center">
                <p className="text-justify">
                  <b>Disclaimer - </b> Disclaimer - The content herein is for informational purposes only and does not constitute an offer or invitation to offer. All images are artistic impressions and not actual representations. Aaranya Greens, located in Sector 35, Sonipat, is a DDJAY project. Flowtech Estates does not guarantee the accuracy or completeness of the information. All details are subject to change without prior notice.
                </p>
                <p>
                  &copy; Copyright 2025. All Rights Reserved{' '}
                  <a href="privacy" target="_blank">Privacy Policy</a> |{' '}
                  <a href="terms" target="_blank">Terms & Conditions</a> |{' '}
                  <a href="refund-policy" target="_blank">Refund Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
        target="_blank"
        rel="noopener noreferrer"
        className="whtsap-btn"
        onClick={() => window.gtag_whatsapp_conversion?.()}
      >
        <img src="images/whatsup.png" className="w-100" alt="WhatsApp" />
      </a>

      <div className="bid-site-visit">
        <div className="row">
          <div className="col">
            <a href="tel:+919211494111" onClick={() => window.gtag_call_conversion?.()}>
              <img src="images/call-icon-gif.gif" alt="Call" /><br /> Call Now
            </a>
          </div>
          <div className="col">
            <a
              href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
              onClick={() => window.gtag_whatsapp_conversion?.()}
            >
              <img src="images/whatsapp.gif" alt="WhatsApp" /><br /> Whatsapp
            </a>
          </div>
          <div className="col">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="images/fillaform.jpeg" alt="Enquire" /> <br /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;