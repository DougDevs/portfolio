import * as S from "./planos.styles";
import PriceCard from "./PlanosCard";
import { apiPlanos } from "../../services/services";
import { H1Title } from "./planos.styles";

export default function Pricing() {
  return (
    <>
    <H1Title id="planos">Planos</H1Title>
    <S.Pricing id="pricing">
      <div className="divApiPricing">
        {apiPlanos.map((e) => (
          <PriceCard
            id={e.id}
            name={e.name}
            description={e.description}
            valor={e.valor}
            item1={e.item1}
            item2={e.item2}
            item3={e.item3}
           
          />
        ))}
      </div>
    </S.Pricing>
    </>
  );
}
