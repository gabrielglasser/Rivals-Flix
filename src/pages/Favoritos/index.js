import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@Rivalsflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@Rivalsflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
    
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>Você não possui filmes salvo no momento.</span>}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
                <span>
                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Remover</button>
                </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
