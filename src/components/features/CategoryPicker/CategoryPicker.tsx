import { categories } from "./constants";

const CategoryPicker = () => {
	return (
		<ul className="flex flex-wrap justify-center items-center w-full h-full bg-amber-800">
			{categories.map((category) => (
				<li
					key={category.id}
					className="w-[25%] aspect-2/1 m-4 flex flex-col items-center justify-center bg-indigo-700"
				>
					<img src={category.image.src} alt={category.image.alt} />
					<h3>{category.name}</h3>
					<button className="mt-2">Dodaj</button>
				</li>
			))}
		</ul>
	);
};

export default CategoryPicker;
