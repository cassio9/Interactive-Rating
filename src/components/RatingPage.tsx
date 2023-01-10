import Star from "../assets/icon-star.svg";
import { ratingStyle } from "../utils";
import { ratings } from "../utils";

interface Props {
	setOpenModal: React.Dispatch<React.SetStateAction<Boolean>>;
	rating: String;
	setRating: React.Dispatch<React.SetStateAction<String>>;
}

const RatingPage: React.FC<Props> = ({ setOpenModal, rating, setRating }) => {
	const handleSubmit = () => {
		if (rating != "") {
			setOpenModal(true);
		} else {
			alert("Please, Rate our service");
		}
	};

	const ratingsHtml = ratings.map((rate) => {
		return (
			<div key={rate}>
				<input
					type="radio"
					id={rate}
					name="rating"
					value={rate}
					className="hidden
					peer"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}></input>
				<label
					htmlFor={rate}
					className={`${ratingStyle} peer-checked:bg-Orange peer-checked:text-white`}>
					<div className="text-lg font-semibold block">{rate}</div>
				</label>
			</div>
		);
	});

	return (
		<div className="bg-gradient-to-t from-VeryDarkBlue to-DarkBlue p-4 rounded-xl max-w-[320px] md:max-w-[380px]">
			<button className="bg-VeryDarkBlue w-9 h-9  flex justify-center items-center  rounded-full text-MediumGrey">
				<img className="" src={Star} alt="" />
			</button>
			<h1 className="text-white font-bold text-xl my-4">How did we do?</h1>
			<p className="text-lightGrey ">
				Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!
			</p>
			<div className="flex justify-between my-4 ">{ratingsHtml}</div>
			<button
				className="bg-Orange w-full rounded-2xl pt-1 h-12 my-4 text-white  uppercase tracking-widest active:bg-white active:text-Orange "
				aria-label="Submit"
				onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default RatingPage;
