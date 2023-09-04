import * as S from "./service.styles";

interface Props {
  id: number;
  img: string;
  name: string;
  tag: string;
  description: string;
  key: number;
}

export default function ProductCard({
  img,
  name,
  tag,
  description,
  key,
}: Props) {
  return (
    <S.ProductCard key={key}>
      <div>
        <img alt={name} src={img} />
      </div>
      <h4>
        <a>{name}</a>
        <span>{tag}</span>
      </h4>
      <p>{description}</p>
      <a className="readMore" href="https://api.whatsapp.com/send?phone=5547999516182">
        CONTRATAR
      </a>
    </S.ProductCard>
  );
}