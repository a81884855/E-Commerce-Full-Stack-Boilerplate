import React, { useState, useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { Context as ProductContext } from "../../../context/ProductDetail";
import icon from "../../../assets/customer_icon.png";
import brand from "../../../assets/logo.png";
import Rating from "@material-ui/lab/Rating";

const descriptions = [
  "Description",
  "Additional Information",
  "Review",
  "Brand",
  "Shipping & Delivery"
];

const display = description => {
  switch (description) {
    case "Description":
      return <Description />;
    case "Additional Information":
      return <AdditionalInformation />;
    case "Review":
      return <Review />;
    case "Brand":
      return <Brand />;
    case "Shipping & Delivery":
      return <Ship />;
    default:
      return <div>Sorry...Some Error Here!!</div>;
  }
};

const AdditionalContent = () => {
  const [active, setActive] = useState("Description");
  return (
    <div className="addtionalContent ">
      <div className="description-review-topbar">
        {descriptions.map(description => (
          <div
            key={description}
            className={active === description ? "active" : ""}
            onClick={() => setActive(description)}
          >
            {description}
          </div>
        ))}
      </div>
      {display(active)}
    </div>
  );
};

const Description = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Row className="pb-40">
      <Col className="pb-20" sm={12} md={7} lg={5}>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
        <div className="video" onClick={() => setOpen(true)}>
          <span className="button button-play" />
        </div>
      </Col>
      <Col className="content">
        <p>
          Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas
          magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales
          orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus
          scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit
          arcu..
        </p>
        <ul>
          <li>
            Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt
            semper
          </li>
          <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
        </ul>
        <p>
          Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu
          ante a elit tempus fermentum. Aliquam commodo tincidunt semper.
          Phasellus accumsan, justo ac mollis pharetra,.
        </p>
      </Col>
    </Row>
  );
};

const AdditionalInformation = () => {
  return (
    <div className="content">
      <div className="title">
        <div className="category">Size</div>
        <div>L, S, XL, XXL</div>
      </div>
      <div className="title">
        <div className="category">Brands</div>
        <div>Airi, Draven, Mango, Valentino, Zara</div>
      </div>
      <div className="title">
        <div className="category">Color</div>
        <div>Blue, Brown, Green, Pink, Violet, White</div>
      </div>
    </div>
  );
};

const Review = () => {
  const {
    state: { name, star }
  } = useContext(ProductContext);
  return (
    <div className="Review">
      <h3>1 review for {name}</h3>
      <div className="comment-container">
        <Image className="customer-image" src={icon} thumbnail />

        <div className="customer-comment">
          <div>
            <span className="customer-name">David Harrison</span> {" - "}
            <span className="date">Feb 14, 2020</span>
            <Rating
              className="star"
              name="half-rating-read"
              value={star}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="comment-detail">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </div>
        </div>
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <Row className="brand">
      <Col>
        <Image className="image" src={brand} />
      </Col>
      <Col sm={12} md={8} lg={10} className="content">
        Vestibulum hendrerit interdum sodales. Donec sit amet arcu sem. Morbi
        commodo nunc id nunc auctor, molestie posuere ante accumsan. Integer
        molestie sit amet felis vitae luctus. Praesent nibh enim, sodales ut
        risus vitae, interdum tincidunt quam. Cras suscipit et nulla id egestas.
        Mauris enim nunc, placerat a velit eget, pretium porta metus. Duis
        euismod varius ipsum, non condimentum augue mollis at. Phasellus felis
        libero, luctus eget purus in, aliquam fringilla ante. Proin commodo erat
        eu augue commodo, ac sollicitudin erat iaculis. Suspendisse potenti.
        Cras eget lobortis lectus, consectetur mollis metus. Sed eu arcu sed
        purus varius sodales.
      </Col>
    </Row>
  );
};

const Ship = () => {
  return (
    <div className="ship">
      <ul>
        <li>Aliquam placerat quam eu vulputate ultricies.</li>
        <li>
          Pellentesque maximus ante id risus gravida, a convallis dolor
          sollicitudin.
        </li>
        <li>Etiam quis nisi vulputate, congue leo vitae, consequat erat.</li>
        <li>
          Proin laoreet tellus sit amet est facilisis, a iaculis purus
          tincidunt.
        </li>
        <li>Aliquam hendrerit massa nec ex sodales rutrum.</li>
        <li>Vivamus sit amet nibh eu sem porttitor feugiat.</li>
      </ul>
    </div>
  );
};

export default AdditionalContent;
