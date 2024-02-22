import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import card1 from "./assets/images/card1.jpg";
import card2 from "./assets/images/card2.jpg";
import card3 from "./assets/images/card3.jpg";
import card4 from "./assets/images/card4.jpg";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";

const Page = () => {
  const [active_menu, setactive_menu] = useState(1);
  const [nestedData, setnestedData] = useState(null);

  const [showamazondata, setshowamazonData] = useState([]);
  const [showclouddata, setshowcloudData] = useState([]);


  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Amazon",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card1,
      tabdata: [
        { id: 1, value: 1, title: "Amazon 1 GB", data:[{price: "Rs 200", tax: "2%",name: "1 GB"}] },
        { id: 2, value: 2, title: "Amazon 2 GB", data:[{price: "Rs 500", tax: "5%", name: "2 GB"}] },
        { id: 3, value: 3, title: "Amazon 3 GB", data:[{price: "Rs 900", tax: "9%" , name: "3 GB"}] },
      ],
    },
    {
      id: 2,
      title: "Cloud Computing",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card2,
      tabdata: [
        { id: 1, value: 1, title: "Cloud 1 GB", data:[{price: "Rs 300" , tax: "10%" , name: "1 GB"}] },
        { id: 2, value: 2, title: "Cloud 2 GB", data:[{price: "Rs 600" , tax: "15%" , name: "2 GB"}] },
        { id: 3, value: 3, title: "Cloud 3 GB", data:[{price: "Rs 1000" , tax: "20%" , name: "3 GB"}] },
      ],
    },
    {
      id: 3,
      title: "Microsoft Azure",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card3,
      tabdata: [],
    },
    {
      id: 4,
      title: "Google Description",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card4,
      tabdata: [],
    },
  ]);

  console.log(">>>>>>>>");

  const Tab_click = (index, li) => {
    console.log(">>>>>>>>>>>>>index", index);
    console.log(">>>>>>>>>>>>>li", li);

    setactive_menu(index);
    setnestedData(li);
  };

  const modal_click = () => {
    const modalElement = document.getElementById("exampleModal");
    const bootstrapModal = new Modal(modalElement);
    bootstrapModal.show();
  };

  const handleChange = (event, data) => {
    let value = event.target.value;
    let firstdata ;
    let secondaata;

    if(data == 1) {
      cards.forEach((element) => {
        console.log(">>>>>>innerelement",element.id,data);
          if (element.id === 1) {
            element.tabdata && element.tabdata.forEach((innerelement) => {
              if (innerelement.id == value) {
                setshowamazonData(innerelement?.data);
                console.log(">>>>>>>innerelement",innerelement?.data);
              }
            });
          }
        });
    }
    
    if(data == 2) {
      cards.forEach((element) => {

      if (element.id === 2) {
        console.log(">>>>>>>",element.id,data);
        element.tabdata && element.tabdata.forEach((innerelement) => {
          if (innerelement.id == value) {
            setshowcloudData(innerelement?.data);
          }
        });
      }
    });
    }
  };

  return (
    <div className="App">
      <Header />

      <div className="section">
        <div className="container mt-4">
          <h3>IT Technologies</h3>
          <div className="row">
            {cards.map((card,key) => (
              <div key={key} className="col-md-3 mb-4 card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img
                      src={card?.image}
                      className="card-img-top"
                      alt={card.title}
                    />
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <div className="card-body">
                    <p className="card-text">{card?.content}</p>
                    <div className="tabs_section">
                      <ul className="nav nav-tabs">
                      <label for="pet-select">Choose Data:</label>
                        <select
                          id="pet-select"
                          className="selector"
                          name="country"
                          htmlFor=""
                          onChange={(event) => {
                            handleChange(event, card.id);
                          }}
                        >
                        <option>--- Choose Value ---  </option>
                          {card.tabdata.map((innerdata, key) => {
                            return (
                              <>
                                <option key={key} value={innerdata?.value}>
                                  {innerdata?.title}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



  {showamazondata && showamazondata.length > 0 || showclouddata && showamazondata.length > 0  ? <div className="card_section">
      <div className="tab_section">
      
      <div className="amazon_data">
        <h5>Amazon List</h5>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>GB Details</th>
            <th>Price </th>
            <th>Tax</th>
          </tr>
          </thead>
    
          <tbody>
                        {showamazondata.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.tax}</td>
                            </tr>
                        ))}
                    </tbody>

        </table>
        </div>

        <div className="cloud_data"><h5>Cloud List</h5>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>GB Details</th>
            <th>Price </th>
            <th>Tax</th>
          </tr>
          </thead>
          <tbody>
                        {showclouddata.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.tax}</td>
                            </tr>
                        ))}
                    </tbody>
        </table>
        </div>
        </div>
      </div> : "" }
      <Footer />
    </div>
  );
};

export default Page;
