import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "1166f2f22cf014d88a69aa246561c7a0",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadFilme();

    return () => {
      console.log("componente desmontado");
    };
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando Filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Estreia: {filme.release_date}</strong>
      <strong>Nota: {filme.vote_average} / 10</strong>
    </div>
  );
}

export default Filme;
