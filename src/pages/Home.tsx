import React from "react";
import MangaCard from "../components/MangaCard/MangaCard";

export default function Home() {
  // const navigate = useNavigate();
  // const optionContext = useContext(OptionContext);

  return (
    <div className="container-fluid">
      <article>
        <header>Popular</header>
        <MangaCard />
      </article>
      <div>Manga list</div>
    </div>
  );
}
