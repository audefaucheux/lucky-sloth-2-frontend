import SlotMachineApp from "./app";

const Home = () => {
  return (
    <>
      <SlotMachineApp />
      <style jsx global>{`
        //// GENERAL ////

        h1 {
          font-family: "Ribeye", cursive;
          font-size: 4rem;
          margin: 1rem;
        }

        body {
          font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        .sea-green {
          color: lightseagreen;
        }

        .center {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        button {
          margin: 0.3rem;
        }

        //// LEADERBOARD ////

        table {
          margin: 0 auto;
          width: 33rem !important;
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
          margin-top: 1rem;
          border-radius: 6px;
          align-self: center;
        }

        input,
        select {
          height: 2rem;
          width: 21rem;
        }

        //// TOP BANNER ////

        #top-banner {
          display: flex;
          width: 100%;
          background-color: lightseagreen;
          justify-content: space-between;
        }

        #current-user {
          display: flex;
          align-self: center;
        }

        #top-banner img {
          height: 3.5rem;
        }

        //// SLOT MACHINE ////

        #slot-machine {
          padding: 56px 43px 66px 43px;
          background-image: url(../images/game/redslotmachine2.png);
          background-repeat: no-repeat;
          background-size: 590px auto;
          margin: 27px auto;
          width: 590px;
        }

        #slot-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 243px;
          padding: 2.5rem 0;
        }

        .slot-images-size {
          width: 33%;
        }

        .slot-images-size img {
          max-height: 9rem;
          max-width: 9rem;
        }

        .spin-button {
          height: 6rem;
          width: 6rem;
          border-radius: 50%;
          background-color: red;
          border: 4px solid black;
          font-family: "Ribeye", cursive;
          font-size: 22px;
          color: white;
        }

        .spin-button:hover {
          box-shadow: inset 0 0 0 50px rgba(0, 0, 0, 0.2);
        }

        //// BET ////

        #bet-container {
          display: flex;
          justify-content: center;
        }

        #bet-amount-input {
          width: 50px;
          margin-right: 10px;
        }

        #bet-header {
          font-size: 26px;
          margin: 0.3rem;
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
          display: flex;
          justify-content: center;
        }

        #stop-logo img {
          height: 6rem;
          align-self: center;
        }
      `}</style>
    </>
  );
};

export default Home;
