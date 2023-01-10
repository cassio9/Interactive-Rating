import { useState } from "react";
import Modal from "./components/Modal";
import RatingPage from "./components/RatingPage.jsx";
import "./App.css";

function App() {
	const [openModal, setOpenModal] = useState<Boolean>(false);
	const [rating, setRating] = useState<String>("");

	return (
		<div className="bg-black h-fit min-h-screen w-full font-Overpass flex justify-center items-center">
			{!openModal ? (
				<RatingPage setOpenModal={setOpenModal} rating={rating} setRating={setRating} />
			) : (
				<Modal rating={rating} />
			)}
		</div>
	);
}

export default App;
