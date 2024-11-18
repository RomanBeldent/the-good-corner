import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { DELETE_AD } from "../graphql/queries";
import { useGetAdByIdQuery } from "../generated/graphql-types";

const AdDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetAdByIdQuery({
    variables: { getAdByIdId: Number(id) },
    skip: !id,
  });

  const deleteAd = async () => {
    try {
      await useQuery(DELETE_AD, {
        variables: { id: Number(id) }
      });
      navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // const navigate = useNavigate();

  // const deleteAd = async () => {
  //   try {
  //     await axios.delete(`${API_URL}/ad/${id}`);
  //     navigate(`/`);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // }

  if (data) {
    return (
      <>
        <h2 className="ad-details-title">{data.getAdById.title}</h2>
        <section className="ad-details">
          <div className="ad-details-image-container">
            <img className="ad-details-image" src={data.getAdById.pictures[0].url} />
          </div>
          <div className="ad-details-info">
            <div className="ad-details-price">{data.getAdById.price} €</div>
            <div className="ad-details-description">
              {data.getAdById.description}
            </div>
            <hr className="separator" />
            <div className="ad-details-owner">
              Annoncée publiée par <b>{data.getAdById.owner}</b> le {new Date(data.getAdById.createdAt as string).toLocaleString().slice(0, 9)}.
            </div>
            <a
              href="mailto:serge@serge.com"
              className="button button-primary link-button"
            ><svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
              style={{ stroke: "currentColor", strokeWidth: 2.5, fill: "none" }}
            >
                <path
                  d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"
                ></path>
              </svg>
              Envoyer un email</a>
            <Link className="button button-primary link-button" to={`/ad/edit/${id}`}>
              Modifier l'annonce</Link>
            <button className="button button-primary link-button" onClick={deleteAd}>Supprimer l'annonce</button>
          </div>
        </section >
      </>
    );
  }
};

export default AdDetailsPage;
