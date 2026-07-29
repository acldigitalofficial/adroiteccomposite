export default function MapEmbed() {
  return (
    <section className="map-section">
      <div className="map-section__header">
        <span className="map-section__subtitle">Our Location</span>
        <h3 className="map-section__title">Sidco Industrial Estate, Alathur</h3>
      </div>
      <div className="map-section__wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7784.6127849376435!2d80.1769771915925!3d12.693414200387732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525472ce2734ad%3A0x13787fe70c7a99a0!2zU2lkY28gSW5kdXN0cmlhbCBFc3RhdGUuIOCumuCuv-Cun-CvjeCuleCviyDgrqTgr4rgrrTgrr_grrHgr43grqrgr4fgrp_gr43grp_gr4g!5e0!3m2!1sen!2sin!4v1785350657951!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Adroitec Composite Lab - Sidco Industrial Estate, Alathur"
        ></iframe>
      </div>
    </section>
  )
}
