import React, { useState } from "react";
import styled from "styled-components";

const StyledCrossSellOption = styled.div`
  padding: 0;
  position: absolute;
  background-image: linear-gradient(to right, #6a85ff 0%, #439ef3 100%);
  opacity: 0.8;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  left: 9%;
  right: 0;
  top: 10%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0.4rem;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  h5 {
    font-weight: 400;
  }

  span {
    font-size: 1.5rem;
    color: #e4e4e4;
  }

  p {
    color: #ffc400;
    text-shadow: 2px 2px rgb(0, 21, 138);
    font-size: 3rem;
  }

  :hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 600;
`;

// countdown timer
const CrossSellOption = () => {
  const [clock, setClock] = useState("");
  // Set the date we're counting down to
  let countDownDate = new Date("Sep 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = Math.abs(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    let minutes = Math.abs(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

    // Output the result in an element with class="counter"
    setClock(days + " : " + hours + " : " + minutes + " : " + seconds + " ");

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <StyledCrossSellOption>
      <h2>Autumn Sale</h2>
      <h5>Days Hours Minutes Seconds</h5>
      <h2>{clock}</h2>
      <StyledSpan>
        $<p>99.99</p>
      </StyledSpan>
      <h3>3 YEAR PLAN</h3>
    </StyledCrossSellOption>
  );
};

export default CrossSellOption;
