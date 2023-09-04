import * as S from "./planos.styles";

interface Props {
  id: number;
  name: string;
  description: string;
  valor: number;
  item1: string;
  item2: string;
  item3: string;
}

export default function PriceCard(props: Props) {
  return (
    <S.PriceCard key={props.id}>
      <div className="card">
        <div className="content">
          <div className="title">{`${props.name} `}</div>
          <div className="price">${`${props.valor} `}/Mês</div>
          <div className="description">{props.description}</div>
          <S.StyledList>
            <S.ListItem>
              <S.Bullet />
              {props.item1}
            </S.ListItem>
            <S.ListItem>
              <S.Bullet />
              {props.item2}
            </S.ListItem>
            <S.ListItem>
              <S.Bullet />
              {props.item3}
            </S.ListItem>
          </S.StyledList>
        </div>
        <a className="button" href="https://api.whatsapp.com/send?phone=5547999516182" target="_blank" rel="noopener noreferrer">
          CONTRATAR
        </a>
      </div>
    </S.PriceCard>
  );
}
