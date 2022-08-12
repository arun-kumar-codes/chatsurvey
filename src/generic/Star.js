// import React from "react";
// import style from "../style/star.scss";
// const Star = (props) => {
//   return (
//     <div>
//       <ul className={props.className}>
//         <li>
//           <i className="far fa-star"></i>
//         </li>
//         <li>
//           <i className="far fa-star"></i>
//         </li>
//         <li>
//           <i className="far fa-star"></i>
//         </li>
//         <li>
//           <i className="far fa-star"></i>
//         </li>
//         <li>
//           <i className="far fa-star"></i>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Star;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../generic/RatingStyle";
const Rate = () => {
const [rate, setRate] = useState(0);
return (
	<Container>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<Radio
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
			}}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(255,215,0)"
					: "rgb(192,192,192)"
				}
			/>
			</Rating>
		</label>
		);
	})}
	</Container>
);
};

export default Rate;


// min-height: 60vh;
// font-size: 60px;