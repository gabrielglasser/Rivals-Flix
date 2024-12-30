import { useEffect, useState } from "react";
import api from "../../services/api";
function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "1166f2f22cf014d88a69aa246561c7a0",
          language: "pt-BR",
          page: 1,
        }
      });

      

    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
