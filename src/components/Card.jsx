function Card({ title, eyebrow, children, footer, className = "", ariaLabel }) {
  return (
    <article
      className={`card ${className}`.trim()}
      aria-label={ariaLabel || title}
    >
      {(eyebrow || title) && (
        <header className="card-header">
          {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
          {title && <h2 className="card-title">{title}</h2>}
        </header>
      )}
      <div className="card-body">{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </article>
  );
}

export default Card;
