import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ArrowRight, GalleryF } from "../../assets";
import { Navbar, Footer, JoinUs, Card } from "../../components";
import "./style.css";

const ProjectDisplay = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="projects-display-intro-container">
          <div className="top-bar"></div>
          <div className="projects-display-hero">
            <div className="projects-display-intro-overlay-text">
              <div>
                <h2>Construction of Secondary School</h2>
              </div>
              <div className="date">
                <p>2 July, 2020</p>
                <span>Posted made by admin</span>
              </div>
            </div>
          </div>
        </section>
        <article className="project-display-article">
         
          <img src={GalleryF} alt="poster" />
         
          <div id='top-post'>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nunc
              cursus diam ullamcorper pretium. Nisl vulputate non fermentum
              vitae. Purus rhoncus morbi arcu, libero nunc, augue malesuada
              sapien lacus. Tellus quam convallis at aliquam tellus semper. Vel
              sed viverra morbi tristique sit et. Euismod hendrerit eget risus
              elementum pretium. Enim, lectus ultrices purus pellentesque eget
              maecenas venenatis. Adipiscing malesuada viverra rhoncus tortor
              sodales pharetra. Felis neque nisl ultricies pulvinar tellus
              ullamcorper ornare. Egestas pulvinar sit velit tempus, gravida.
              Congue donec ullamcorper malesuada in tristique ut nunc aliquam.
              Urna quis ultricies nunc, sollicitudin viverra dignissim. Morbi
              sem porta odio duis lorem ac senectus massa. Risus consectetur
              mattis iaculis in sollicitudin felis. Nulla nec ut lacus, a
              rhoncus nisl ut nec. Viverra diam sit est sapien purus sed diam
              aenean. Erat sed volutpat pulvinar rhoncus, tortor nisl tortor vel
              aliquam. Feugiat mauris eu nibh etiam convallis felis. Sed aliquet
              pellentesque sed ac elit. Purus faucibus sit magna non, aliquam
              non id. Egestas nulla imperdiet eget nulla. Tincidunt etiam
              convallis ut sed ornare. Pellentesque tristique dictum
            </p>
          </div>
            <div id='bottom-post'>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              suspendisse sagittis, gravida et pretium sed. Odio ultricies
              pharetra morbi sit. Adipiscing eget felis est mauris tellus vitae.
              Turpis neque tempor aliquam, arcu tempus justo vel nibh. Feugiat
              convallis nullam ut tincidunt duis a dolor arcu, pulvinar. Aliquet
              id vulputate ut donec scelerisque quis id leo bibendum. Fringilla
              aliquam nisi quam semper scelerisque vehicula eget proin. Tellus
              dui varius elementum vel. Adipiscing tellus senectus tincidunt
              enim tempus consequat diam augue. Enim donec viverra cras at
              cursus ornare eu, mattis cursus. Sollicitudin feugiat amet sit
              nec. Suspendisse vitae gravida sit amet dignissim scelerisque. Nec
              nibh ultrices blandit aenean in eu massa. Urna risus non,
              tincidunt eget. Non enim egestas scelerisque posuere leo malesuada
              posuere iaculis. Arcu, duis mattis consectetur varius. Blandit
              ante purus diam bibendum turpis. Morbi lorem duis scelerisque sit
              lacus molestie. At diam ut vulputate in elementum blandit morbi
              orci. Diam adipiscing elementum vestibulum, ullamcorper est quis
              mattis sed amet. Vitae dis semper est ut. Nisl mauris enim vel
              molestie nunc proin viverra lectus. Est venenatis quis adipiscing
              arcu. Cras gravida non, diam pulvinar vestibulum. Etiam nisi,
              vestibulum nibh vitae neque, donec. Vel et convallis arcu et,
              egestas eu morbi interdum enim. Eget sed enim, sed platea sagittis
              sit mauris fringilla. Pharetra, urna purus sed odio ultrices
              magna. Eget ultricies nisi habitant aenean in eu faucibus. Euismod
              ipsum suspendisse arcu convallis adipiscing nec ipsum eget. Justo
              sagittis vel, sed faucibus eget vitae dolor non. Quam eu, auctor
              quis porttitor. Quis sit venenatis nunc, dui. Facilisi turpis
              adipiscing arcu rhoncus. At in urna, ornare elementum interdum
              ante in. Et a platea nullam tristique porta enim.
            </p>
            </div>
           
          </article>
        <section className="projects-container">
          <div className="projects-header">
            <h2>More Projects</h2>
            <Link to='/projects'>
              LEARN MORE
              <img src={ArrowRight} alt="poster" />
            </Link>
          </div>
          <div className="projects-grid">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
          <JoinUs />
        </section>
      </main>
      <Footer />
    </>
  );
};

export { ProjectDisplay };
