/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const navigate = useNavigate();
	const [readMore, setReadMore] = useState(false);
	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? 'show less' : '  read more'}
					</button>
				</p>
				<button onClick={() => navigate(`/single/${id}`)}>more info</button>
				<button className="delete-btn" onClick={() => removeTour(id)}>
					not interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;
