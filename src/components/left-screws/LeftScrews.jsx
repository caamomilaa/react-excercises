// 6️⃣ Bego tiene 62 tornillos y los guarda en cajas de 12. ¿Cuántos tornillos quedarán sueltos?
// Crea un componente que reciba el total y la capacidad por caja como props y muestre los sobrantes.

const LeftScrews = props => {
	const getLeftScrews = props.screws % props.boxes;
	return <p>Quedan {getLeftScrews} tornillos sueltos.</p>;
};

export default LeftScrews;
