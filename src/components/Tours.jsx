/* eslint-disable react/prop-types */

import { useGlobalContext } from '../context';
import Tour from './Tour';
const Tours = () => {
	const { tours, removeTour } = useGlobalContext();
	return (
		<section>
			<div className="title">
				<h2> tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
