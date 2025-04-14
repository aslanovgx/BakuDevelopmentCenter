const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Kurs çox faydalı və maraqlı idi! Öyrəndiyim biliklər sayəsində
                artıq öz layihələrimi yaratmağa başladım. Tövsiyə edirəm! "
              </span>
              <span className="person">Əli Səfərov</span>
              <span className="job">Backend Developer</span>
            </p>
            <img src="assets/testimonials/testimonials1.svg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Müəllimlər peşəkar və dəstəkləyicidir. Bu kurs sayəsində
                biliklərimi artırdım və yeni dostlar qazandım. "
              </span>
              <span className="person">Nərgiz Əliyeva</span>
              <span className="job">Frentend Developer</span>
            </p>
            <img src="assets/testimonials/testimonials2.svg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
