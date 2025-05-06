// 3️⃣ Camila tiene 34 caramelos y quiere repartirlos en grupos de 5. ¿Cuántos caramelos le sobrarán?
// Crea un componente que reciba los caramelos y el tamaño del grupo como props y muestre los sobrantes.

const LeftCandys = props => {
	const getLeftCandys = props.candys % props.groups;
	return <p>Sobran {getLeftCandys} caramelos.</p>;
};
export default LeftCandys;
