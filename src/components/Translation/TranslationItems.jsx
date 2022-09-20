export default function TranslationItem({ char, delay }) {
	return (
		<>
			<img
				src={`../pictures/individual_signs/${char}.png`}
				alt={`Sign of letter ${char}`}
				style={{ "--delay": delay }}
			/>
		</>
	);
}
