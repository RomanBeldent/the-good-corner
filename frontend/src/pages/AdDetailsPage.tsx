import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdCardProps } from "../components/AdCard";

const AdDetailsPage = () => {
  const { id } = useParams();
  const [adDetails, setAdDetails] = useState<AdCardProps>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        const result = await axios.get(`${API_URL}/ad/${id}`);
        setAdDetails(result.data)
      } catch (err) {
        console.log("err", err);
      }
    }
    fetchAdDetails();
  }, [id]);

  const deleteAd = async () => {
    try {
      await axios.delete(`${API_URL}/ad/${id}`);
      navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <>
      <h2 className="ad-details-title">{adDetails?.title}</h2>
      <section className="ad-details">
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={adDetails?.picture} />
        </div>
        <div className="ad-details-info">
          <div className="ad-details-price">{adDetails?.price} €</div>
          <div className="ad-details-description">
            {adDetails?.description}
          </div>
          <hr className="separator" />
          <div className="ad-details-owner">
            Annoncée publiée par <b>{adDetails?.owner}</b> le {new Date(adDetails?.createdAt as string).toLocaleString().slice(0, 9)}.
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
};

export default AdDetailsPage;
