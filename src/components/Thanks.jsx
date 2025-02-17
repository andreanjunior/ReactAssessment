import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';
import './Thanks.css';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        {' '}
        A sua opiniao e muiuto importante, em breve voce recebera um cupom de
        10% de desconto para a sua proxima compra.
      </p>

      <p>Para concluir sua avaliaçao clique no botao de enviar abaixo.</p>
      <h3>Aqui esta o resumo da sua avaliaçao{data.name}:</h3>
      <p classname="review-data">
        <span> Satisfaçao com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        {' '}
        <span>Comentario:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
