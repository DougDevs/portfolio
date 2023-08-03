import styled from "styled-components";

export const Products = styled.section`
  width: 100%;
  .h2SProducts {
    font-size: 30px;
    font-weight: 700;
    color: #515769;
    line-height: 1.4;
    margin: 0 0 15px;
  }

  .pSProducts {
    font-size: 15px;
    font-weight: 400;
    width: 60%;
    color: #a6a7aa;
  }

  .divTextProducts {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 80px;
    padding: 2.5em;
  }

  .divProductsCard {
    display: flex;
  }

  @media(max-width: 770px) {
  .divProductsCard {
    display: block;
  }

  .pSProducts {
    width: 90%;
  }
}
`;

export const ProductCard = styled.section`
  padding: 1em;
  margin-top: 10px;
  img {
    max-width: 100%;
    height: auto;
  }

  h4 {
    font-size: 22px;
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h4 a {
    color: #515769;
  }

  h4 span {
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    color: #bfc1c7;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: #a6a7aa;
    margin-bottom: 15px;
  }

  .readMore {
    font-size: 13px;
    font-weight: 600;
    padding: 15px 40px;
    color: #515769;
    background: #f3f4f5;
    border-color: transparent;
    border-width: 0;
  }
  
  .readMore:hover {
    cursor: pointer;
    background-color: #17bed2;
    color: white;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
  }


`;
