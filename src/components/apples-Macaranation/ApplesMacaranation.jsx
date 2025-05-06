// 5️⃣ Macarena recogió 320 manzanas y las va a poner en 10 cajas. ¿Cuántas manzanas tendrá cada caja?
// Crea un componente que reciba la cantidad total y cajas como props y muestre cuántas por caja.

const ApplesMacaranation = props => {
	const applesPerBox = props.apples / props.boxes;
	return <p>Cada caja tendrá {applesPerBox} manzanas.</p>;
};
export default ApplesMacaranation;
