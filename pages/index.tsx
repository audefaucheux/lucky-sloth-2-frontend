import SlotMachineApp from "./app";

const Home = () => {
  return (
    <>
      <SlotMachineApp />
      <style jsx global>{`
        //// GENERAL ////
        h1 {
          font-family: "Ribeye", cursive !important;
          font-size: 90px !important;
        }

        h2 {
          font-family: "Ribeye", cursive !important;
          font-size: 70px !important;
        }

        body {
          font-family: "Trebuchet MS", Helvetica, sans-serif !important;
        }

        #welcome,
        #bet-header span,
        .credit-span {
          color: lightseagreen;
        }

        .center {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        //// LEADERBOARD ////
        table {
          margin: 0 auto;
          width: 500px !important;
        }

        //// LOGIN ////

        #login-content {
          min-height: 45rem;
        }

        //// FORM ////
        .form-container {
          display: flex;
          padding: 3rem 0;
          flex-direction: column;
        }

        .form-container-items {
          margin-top: 15px;
          border-radius: 6px;
          align-self: center;
        }

        input,
        select {
          height: 35px;
          width: 21rem;
        }

        //// SLOT MACHINE ////

        div#slot-machine {
          padding: 56px 43px 66px 43px;
          background-image: url(../images/game/redslotmachine2.png);
          background-repeat: no-repeat;
          background-size: 590px auto;
          margin: 27px auto 0;
          width: 590px;
        }

        #slot-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 243px;
        }

        .slot-images-size {
          width: 33%;
        }

        .slot-images-size img {
          height: 160px;
        }

        #slot-machine-header div button {
          margin-left: 10px !important;
        }

        .spin-button {
          width: 100px;
          margin: 22px 0 0;
        }

        //// BET ////

        #bet-amount-input {
          width: 50px;
          margin-right: 10px;
        }

        #bet-header {
          font-size: 26px;
        }

        .text {
          font-size: 30px;
        }

        .text-magical {
          font-family: "quite_magicalregular" !important;
          font-size: 60px;
        }

        //// STOP LOGO ////

        #stop-logo {
          background-image: url("../images/game/Whenthefunstopsstop-color.jpg");
          height: 8rem;
        }

        #stop-logo img {
          height: 6rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Home;
