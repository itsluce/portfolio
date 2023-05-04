import { useEffect } from "react";
import ScrollOut from "scroll-out";
import { Pagination } from "swiper";
import classes from "./project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DUMMY__PROJECT } from "../../dummy-data/dammy-data";
import "swiper/css";

const Project = () => {
  useEffect(() => {
    ScrollOut({
      targets: ".projectContainer",
    });
  });
  return (
    <div className={classes.project} id="project">
      <article className={classes.projectCenter}>
        <h2>My Amazing</h2>
        <h2>Projects</h2>
      </article>
      <div className="center"></div>
      <Swiper
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={5}
        grabCursor={true}
        className={classes.projectContainer}
        breakpoints={{
          300: {
            slidesPerView: 1.1,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 1.15,
            spaceBetween: 5,
          },
          500: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
      >
        {DUMMY__PROJECT.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={classes.projectCard}>
                <div
                  className={classes.cover}
                  style={{ background: item.color }}
                ></div>
                <div className={classes.imgContainer}>
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 style={{ color: "#fff" }}>{item.title}</h3>
                <div className="center">
                  <p style={{ color: "#fff" }}>{item.describtion}</p>
                </div>
                <a
                  style={{ backgroundColor: "#fff", color: item.color }}
                  rel="noreferrer"
                  target="_blank"
                  href={item.link}
                >
                  Tap To View
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Project;
