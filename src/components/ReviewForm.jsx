import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <labe className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            value={data.review === 'unsatisfild'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p> Insatisfeito</p>
        </labe>
        <labe className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            value={data.review === 'neutral'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p> Meio Bosta</p>
        </labe>
        <labe className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            value={data.review === 'satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p> Satisfeito</p>
        </labe>
        <labe className="radio-container">
          <input
            type="radio"
            value="neu"
            name="review"
            required
            value={data.review === 'very_satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p> Puta que pariu</p>
        </labe>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentario:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="COnte como vc veio para aqui nessa bagaça...."
          required
          value={data.comment || ''}
          onChange={(e) => updateFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
