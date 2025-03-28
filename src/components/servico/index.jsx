import "./servico.css";

export const Servico = ({ nomes, legs, isExpanded, onClick }) => {
  return (
    <div
      className={`card-container ${isExpanded ? "expanded" : ""}`}
      onClick={onClick}
    >
      <div className="card-content">
        <h2 className="card-title">{nomes}</h2>
        {isExpanded && (
          <p className="hidden-text">
            {legs}
          </p>
        )}
      </div>
    </div>
  );
};
