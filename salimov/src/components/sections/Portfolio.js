import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { salimovSlider } from "@/src/sliderProps";
import { instructors } from "../Mock/Portfolio/instructors";
import Link from "next/link";

const Portfolio = () => {
  const [filteredInstructors, setFilteredInstructors] = useState(instructors);

  useEffect(() => {
    // Bu funksiyada, `videoUrl` olmayan instructorları təmizləyirik
    setFilteredInstructors(
      instructors.filter((item) => item.type !== "video" || item.videoUrl)
    );
  }, [instructors]); // instructors dəyişəndə təkrardan işləyəcək

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              İnstruktorlar
            </span>
          </span>
        </h3>
      </div>

      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {filteredInstructors.map((item) => (
          <SwiperSlide key={item.id} className="single-item swiper-slide">
            <div className="main-content">
              {item.type === "image" && (
                <img className="img-fluid" src={item.image} alt={item.name} />
              )}

              {item.type === "video" && item.videoUrl && (
                <div className="videocontainer">
                  <iframe
                    className="youtube-video"
                    src={item.videoUrl}
                    allowFullScreen
                  />
                </div>
              )}

              {item.type === "slider" && (
                <Swiper
                  {...salimovSlider.portfolioItems}
                  className="swiper swiper-portfolio-item"
                >
                  {item.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt="project" />
                    </SwiperSlide>
                  ))}
                  <div className="swiper-pagination" />
                </Swiper>
              )}

              {item.type === "external" && (
                <a href={item.externalUrl} target="_blank" className="external">
                  <img className="img-fluid" src={item.image} alt={item.name} />
                </a>
              )}
            </div>

            <div className="details">
              <h4>{item.name}</h4>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-user" />
                  </span>
                  <span>{item.role}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" />
                  </span>
                  <span>{item.experience}</span>
                </li>
              </ul>
              <Link href={`/instructor/${item.id}`} className="custom-btn">
                <span>
                  ətraflı{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
              {/* <a href="#" target="_blank" className="custom-btn">
                <span>
                  ətraflı <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </a> */}
            </div>
          </SwiperSlide>
        ))}

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Portfolio;
