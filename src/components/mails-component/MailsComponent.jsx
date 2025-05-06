// 1️⃣ Camila responde 150 correos en 5 horas. ¿Cuántos correos responde por hora?
// Crea un componente que reciba el número de correos y las horas como props y muestre cuántos responde por hora.

const MailsPerHour = props =>{
    const getMails = props.mails/props.hours;

    return <p> Camila responde {getMails} mails por hora.</p>
}

export default MailsPerHour