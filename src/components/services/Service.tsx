import * as S from "./service.styles";
import { apiServices } from "../../dados/services";
import ProductCard from "./serviceCard";

export default function Products() {
  return (
    <S.Products id="services">
      <div className="divTextProducts">
        <h2 className="h2SProducts">Nossos Serviços</h2>
        <p className="pSProducts">
          Conheça os principais serviços para começar a engajar o público no seu negócio.
        </p>
      </div>
      <div className="divProductsCard">
        {apiServices.map((e) => (
          <ProductCard
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            tag={e.tag}
            description={e.description}
          />
        ))}
      </div>
    </S.Products>
  );
}