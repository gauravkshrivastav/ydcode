import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import card1 from "./assets/images/card1.jpg";
import card2 from "./assets/images/card2.jpg";
import card3 from "./assets/images/card3.jpg";
import card4 from "./assets/images/card4.jpg";
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Page = () => {
  const [active_menu, setactive_menu] = useState(1);
  const [nestedData, setnestedData] = useState(null);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Microsoft Azure",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card1,
      tabdata: [
        { id: 1, tabcontent: "Content1", tabtitle: "Heading1" },
        { id: 2, tabcontent: "Content2", tabtitle: "Heading2" },
        { id: 3, tabcontent: "Content3", tabtitle: "Heading3" }
      ],
    },
    {
      id: 2,
      title: "Google Description",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card2,
      tabdata: [
      ],
      popupdata: [
        { id: 1, tabcontent: "Content1", tabtitle: "Modal 1" },
        { id: 2, tabcontent: "Content2", tabtitle: "Modal 2" },
        { id: 3, tabcontent: "Content3", tabtitle: "Modal 3" }
      ],
    },
    {
      id: 3,
      title: "Amazon",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card3,
      tabdata: [
      ],
    },
    {
      id: 4,
      title: "Cloud Computing",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: card4,
      tabdata: [
      ],
    },
  ]);

  console.log(">>>>>>>>");

  const Tab_click = (index, li) => {
    console.log(">>>>>>>>>>>>>index",index);
    console.log(">>>>>>>>>>>>>li",li);

    setactive_menu(index);
    setnestedData(li);
  };

  const modal_click = ()=>{

    const modalElement = document.getElementById('exampleModal');
    const bootstrapModal = new Modal(modalElement);
    bootstrapModal.show();
  }

  return (
    <div className="App">
      <Header />

      <div className="section">
        <div className="container mt-4">
          <h3>IT Technologies</h3>
          <div className="row">
            {cards.map((card) => (
              <div key={card.id} className="col-md-3 mb-4 card_wrapper">
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
                      {card && card.popupdata &&
                          card?.popupdata.map((innerdata, index) => {
                            return (
                              <>
                                <li className="active_tab" key={index}>
                                  <a
                                    className={
                                      innerdata?.id == active_menu
                                        ? "row dashboard_single_cont_active"
                                        : "row dashboard_single_cont"
                                    }
                                    onClick={() => modal_click(innerdata?.id, innerdata)}
                                  >
                                    {innerdata?.tabtitle}
                                  </a>
                                </li>
                              </>
                            );
                          })}
                        {card && card.tabdata &&
                          card?.tabdata.map((innerdata, index) => {
                            return (
                              <>
                                <li className="active_tab" key={index}>
                                  <a
                                    className={
                                      innerdata?.id == active_menu
                                        ? "row dashboard_single_cont_active"
                                        : "row dashboard_single_cont"
                                    }
                                    onClick={() => Tab_click(innerdata?.id, innerdata)}
                                  >
                                    {innerdata?.tabtitle}
                                  </a>
                                </li>
                              </>
                            );
                          })}
                      </ul>

                      {card &&
                        card.tabdata.map((innerdata, index) => {
                          return (
                            <>
                              <div
                                className={
                                  active_menu == innerdata?.id
                                    ? "dashboard_option_active"
                                    : "dashboard_option"
                                }
                              >
                                <div className="tab_content">
                                  <p>{innerdata?.tabcontent} </p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      
<div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                        <h3>sadasdsd</h3>

            </div>
            </div>
            </div>
            </div>

    </div>


  );
};

export default Page;
