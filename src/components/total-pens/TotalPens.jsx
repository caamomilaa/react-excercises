// 2️⃣ Bego compró 6 cajas de marcadores. Cada caja tiene 10 marcadores. ¿Cuántos marcadores tiene en total?
// Crea un componente que reciba la cantidad de cajas y unidades por caja como props y muestre el total.

const TotalPens = props => {
	const getTotalPens = props.boxes * props.pens;
	return <p>Begonía tiene {getTotalPens} marcadores en total.</p>;
};
export default TotalPens;
