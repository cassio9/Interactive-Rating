import React from "react";
import ThankYOuImg from "../assets/illustration-thank-you.svg";

const Modal: React.FC<{ rating: String }> = ({ rating }) => {
	return (
		<div className="bg-gradient-to-t from-VeryDarkBlue to-DarkBlue px-4 py-8 rounded-xl max-w-[350px] flex flex-col justify-center items-center text-[15px]">
			<img src={ThankYOuImg} alt="Rating Completed" />
			<div className="text-Orange py-1 px-2 bg-DarkBlue rounded-xl m-4">
				You selected {rating} out of 5
			</div>
			<p className="text-white text-2xl">Thank you!</p>
			<p className="text-lightGrey text-justify mt-4 max-w-[300px] [text-align-last:center]">
				We appreciate you taking the time to give a rating. If you ever need more support, don't
				hesitate to get in touch!
			</p>
		</div>
	);
};

export default Modal;
