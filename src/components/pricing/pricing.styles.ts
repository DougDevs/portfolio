import styled from "styled-components";

export const Pricing = styled.div`
  background-color: #fafafa;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  

  .divApiPricing {
    background-color: #fafafa;
    display: flex;
    max-width: 900px;
    height: 90%;
    align-items: center;
  }

  @media(max-width: 770px) {
  height: 1000px;
  .divApiPricing {
    display: block;
  }
}
`;

export const PriceCard = styled.div`
  background-color: white;
  max-width: 800px; 
  height: 480px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #515769;
    line-height: 1.4;
    margin: 10px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: #a6a7aa;
    margin: 10px;
  }

  ul {
    margin: 10px;
    padding-left: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    font-size: 13px;
    color: #81848f;
    padding-left: 20px;
    margin: 5px;
    font-weight: 500;
  }

  a {
    font-size: 13px;
    font-weight: 600;
    padding: 15px 40px;
    color: #515769;
    background: #f3f4f5;
    border-color: transparent;
    border-width: 0;
  }

  a:hover {
    background-color: #1492aa;
    cursor: pointer;
    background-color: #17bed2;
    color: white;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
  }

  @media (max-width: 770px) {
    max-width: 100%;
    height: auto;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }

    ul li {
      font-size: 11px;
    }

    a {
      font-size: 11px;
      padding: 10px 20px;
    }
  }
}`;