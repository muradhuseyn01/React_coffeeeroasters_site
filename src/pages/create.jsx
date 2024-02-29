import "../components/reset.css";
import "./create.css";

import Article from "../components/article";
import Header from "../components/header";
import { useState } from "react";

export default function CreateYourPlan() {
  const lists = [
    {
      id: "1",
      count: "01",
      name: "Preferences",
    },
    {
      id: "2",
      count: "02",
      name: "Bean Type",
    },
    {
      id: "3",
      count: "03",
      name: "Quantity",
    },
    {
      id: "4",
      count: "04",
      name: "Grind Option",
    },
    {
      id: "5",
      count: "05",
      name: "Deliveries",
    },
  ];
  const [select, setSelect] = useState([]);
  const [preferences, setPreferences] = useState({});
  const [bean, setBean] = useState({});
  const [quantity, setQuantity] = useState({});
  const [grind, setGrind] = useState({});
  const [deliveries, setDeliveries] = useState({});
  const [step, setStep] = useState(1);

  const question = [
    {
      id: "1",
      text: "How do you drink your coffee?",
      img: "src/assets/icons/Path 2.png",
      className: "pref",
      cards: [
        {
          id: "1",
          title: "Capsule",
          paragraph: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: "2",
          title: "Filter",
          paragraph:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: "3",
          title: "Espresso",
          paragraph:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: "2",
      text: "What type of coffee?",
      img: "src/assets/icons/Path 2.png",
      className: "bean",
      cards: [
        {
          id: "4",
          title: "Single Origin",
          paragraph: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: "5",
          title: "Decaf",
          paragraph: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: "6",
          title: "Blended",
          paragraph: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: "3",
      text: "How much would you like?",
      img: "src/assets/icons/Path 2.png",
      className: "quant",
      cards: [
        {
          id: "7",
          title: "250g",
          paragraph: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: "8",
          title: "500g",
          paragraph: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: "9",
          title: "1000g",
          paragraph: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: "4",
      text: "Want us to grind them?",
      img: "src/assets/icons/Path 2.png",
      className: "grind",
      cards: [
        {
          id: "10",
          title: "Wholebean",
          paragraph: "Best choice if you cherish the full sensory experience",
        },
        {
          id: "11",
          title: "Filter",
          paragraph: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: "12",
          title: "Cafetiére",
          paragraph: "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: "5",
      text: "How often should we deliver?",
      img: "src/assets/icons/Path 2.png",
      className: "deliver",
      cards: [
        {
          id: "13",
          title: "Every week",
          paragraph: "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: "14",
          title: "Every 2 weeks",
          paragraph: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: "15",
          title: "Every month",
          paragraph: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ];

  function checkout() {
    const createBtn = document.querySelector(".create__plan-btn");
    const createFinish = document.querySelector(".create__plan-finish");
    const backgroundBlurEffect = document.querySelector(".create__plan ");
    createFinish.classList.toggle("hide");
    backgroundBlurEffect.classList.toggle("background-blur");
  }

  function checkoutBack() {
    const createFinish = document.querySelector(".create__plan-finish");
    const backgroundBlurEffect = document.querySelector(".create__plan");
    createFinish.classList.add("hide");
    backgroundBlurEffect.classList.remove("background-blur");
  }

  function selectCard(id, parent, title) {
    if (parent == 1) {
      setPreferences({ ...preferences, id, title });
      setStep(2);
    } else if (parent == 2) {
      setBean({ ...bean, id, title });
      setStep(3);
    } else if (parent == 3) {
      setQuantity({ ...quantity, id, title });
      setStep(4);
    } else if (parent == 4) {
      setGrind({ ...grind, id, title });
      setStep(5);
    } else if (parent == 5) {
      setDeliveries({ ...deliveries, id, title });
    }
    question[parent - 1].cards.map((cardItem) => {
      if (cardItem.id !== id && select.includes(cardItem.id)) {
        if (!select.includes(id)) {
          const index = select.indexOf(cardItem.id);
          if (index > -1) {
            select.splice(index, 1);
          }
        }
      }
      setSelect([...select, id]);
    });
  }

  return (
    <div className="create__plan ">
      <div className="back ">
        <Header
          image="/src/assets/images/Bitmap (3).png"
          infoTitle="Create Plan"
          infoText="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week.
     For whatever brew method you use. For choice, for convenience, for quality."
        />

        <div className="create__plan-article">
          <Article />
        </div>
      </div>
      <div className="create__plan-lists">
        <div className="create__plan-lists-left">
          <ul>
            {lists.map((item, index) => {
              const { id, count, name } = item;
              return (
                <li className={step >= id ? "list active" : "list"} key={index}>
                  <span>{count}</span>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="create__plan-lists-right">
          {question.map((current, index) => {
            return (
              <div key={index} className="create__lists-list">
                <div className="create__lists-list-title">
                  <p>{current.text}</p>
                  <img src={current.img} alt="icon" />
                </div>
                <div
                  className={
                    step >= current.id
                      ? "preferences__add"
                      : "preferences__add display"
                  }
                >
                  {current.cards.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          selectCard(item.id, current.id, item.title);
                        }}
                        key={index}
                        className={
                          select.includes(item.id)
                            ? "preferences__add-card active"
                            : "preferences__add-card"
                        }
                      >
                        <h4>{item.title}</h4>
                        <p>{item.paragraph}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="create__plan-finish hide">
            <div className="create__plan-finish-title">
              <h3>Order Summary</h3>
            </div>
            <div className="create__plan-finish-text">
              <p>
                “I drink my coffee as <span>
                  {preferences.title ? preferences.title : "____"}
                </span>, with a{" "}
                <span>
                  {bean.title ? bean.title : "____"}
                </span> type of bean. <span>
                  {quantity.title ? quantity.title : "____"}
                </span> ground ala{" "}
                <span>
                  {grind.title ? grind.title : "____"}
                </span>, sent to me <span>
                  {deliveries.title ? deliveries.title : "____"}
                </span>.”
              </p>
              <p>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
            </div>
            <div className="create__plan-finish-price">
              <span>$14.00/ mo</span>
              <button className="check-btn" onClick={checkoutBack}>Checkout</button>
            </div>
          </div>

          <div className="create__plan-lists-right-order">
            <p>Order Summary</p>
            <h3>
              “I drink my coffee using{" "}
              <span className="order-summary1">
                {preferences.title ? preferences.title : "____"}
              </span>, with a{" "}
              {
                <span className="order-summary2">
                  {bean.title ? bean.title : "____"}
                </span>
              }{" "}
              type of bean.{" "}
              <span>{quantity.title ? quantity.title : "____"}</span> ground ala{" "}
              <span>{grind.title ? grind.title : "____"}</span>, sent to me{" "}
              <span>{deliveries.title ? deliveries.title : "____"}</span>.”
            </h3>
          </div>
          <button className="create__plan-btn" onClick={() => checkout()}>Create my plan!</button>
        </div>
      </div>
      {/* {console.log(select)} */}
    </div>
  );
}
