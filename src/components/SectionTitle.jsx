export default function SectionTitle({ subtitle, title, description, align = 'center' }) {
  return (
    <div className="section_title-wrap" style={align === 'left' ? { textAlign: 'left', margin: '0 0 60px' } : undefined} data-aos="fade-up">
      {subtitle && <span className="section_subtitle">{subtitle}</span>}
      {title && <h2 className="section_title">{title}</h2>}
      {description && <p className="section_desc">{description}</p>}
    </div>
  )
}
