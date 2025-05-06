// 4️⃣ Sabrina recorre 120 kilómetros en 4 horas. ¿Cuántos kilómetros recorre en 1 hora?
// Crea un componente que reciba distancia y tiempo como props y calcule la velocidad por hora.

const KmPerHour = props => {
	const getKmPerHour = props.kilometers / props.hours;
	return <p>Sabrina recorre {getKmPerHour} km por hora.</p>;
};
export default KmPerHour;
