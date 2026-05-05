import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          marginTop: "70px", // space for fixed header
          height: "450px",
          background:
            'url("https://img.freepik.com/free-photo/business-people-meeting_53876-15178.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Section Admin Intro */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Text Content */}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              officiis dicta consequuntur ducimus temporibus perferendis
              quibusdam corrupti hic porro deserunt aspernatur nisi neque qui
              sunt, voluptates voluptatem animi, sapiente sit.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Nobis officiis dicta
              consequuntur ducimus temporibus perferendis quibusdam corrupti hic
              porro deserunt aspernatur nisi neque qui sunt, voluptates
              voluptatem animi, sapiente sit.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nobis officiis dicta consequuntur
              ducimus temporibus perferendis quibusdam corrupti hic porro
              deserunt aspernatur nisi neque qui sunt, voluptates voluptatem
              animi, sapiente sit.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nobis officiis dicta consequuntur ducimus
              temporibus perferendis quibusdam corrupti hic porro deserunt
              aspernatur nisi neque qui sunt, voluptates voluptatem animi,
              sapiente sit.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nobis officiis dicta consequuntur ducimus temporibus
              perferendis quibusdam corrupti hic porro deserunt aspernatur nisi
              neque qui sunt, voluptates voluptatem animi, sapiente sit.Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis
              dicta consequuntur ducimus temporibus perferendis quibusdam
              corrupti hic porro deserunt aspernatur nisi neque qui sunt,
              voluptates voluptatem animi, sapiente sit.
            </p>
          </div>
          <div className="col-lg-6">
            {/* Image placeholder or content */}
            <img
              className="img-fluid"
              src="https://png.pngtree.com/png-clipart/20250428/original/pngtree-smiling-young-man-giving-a-thumbs-up-dressed-png-image_20896561.png"
              alt="profile"
            />
          </div>
        </div>
        <div className="text-center my-5">
          <Link to={"/dashboard"} className="btn btn-info">
            GO TO DASHBOARD
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
