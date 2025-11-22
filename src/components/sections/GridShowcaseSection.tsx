import { gridCards } from '../../data/content'

const GridShowcaseSection = () => {
  return (
    <section className="grid-showcase">
      <div className="container">
        <header className="section-heading">
          <p className="kicker">Sample</p>
          <h2>
            明瞭会計を実現するシンプルな料金形態
            <span>各所のハウスクリーニングに柔軟対応</span>
          </h2>
        </header>

        <div className="grid-showcase__grid">
          {gridCards.map((card, index) => (
            <article key={`${card.title}-${index}`} className="grid-card">
              <div className="grid-card__media">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="grid-card__body">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GridShowcaseSection
