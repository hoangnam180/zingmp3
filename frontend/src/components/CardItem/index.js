import './CardList.css';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const CardItem = ({ data, onClick, card = true }) => {
    return (
        <div className="card-list" onClick={onClick}>
            <div className="card-list-image">
                <img src={data.thumbnail} alt="thumbnail" />
                {card ? (
                    <div className="card-list-image-hover">
                        <AiOutlineHeart className="card-list-icon small" />
                        <BsPlayCircle className="card-list-icon big" />
                        <BsThreeDots className="card-list-icon small" />
                    </div>
                ) : (
                    <div className="card-list-image-hover">
                        <BsPlayCircle className="card-list-icon big" />
                    </div>
                )}
                {/* <div className="card-list-duration">{data.duration}</div> */}
            </div>
            {card && (
                <div className="card-list-bottom d-flex align-items-center">
                    <div className="card-list-bottom-avatar d-flex align-items-center">
                        <img src={data.thumbnail} alt="thumbnail" />
                    </div>
                    <div>
                        <h4 className="card-list-title">{data.title}</h4>
                        <p className="card-list-description">{data.a}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardItem;
