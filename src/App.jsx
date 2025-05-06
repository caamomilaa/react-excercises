import ApplesMacaranation from './components/apples-Macaranation/ApplesMacaranation';
import LeftCandys from './components/left-candys/LeftCandys';
import LeftScrews from './components/left-screws/LeftScrews';
import MailsPerHour from './components/mails-component/MailsComponent';
import KmPerHour from './components/total-km/TotalKm';
import TotalPens from './components/total-pens/TotalPens';

const App = () => {
	return (
		<>
			<MailsPerHour mails={150} hours={5} />
			<TotalPens pens={10} boxes={6} />
			<LeftCandys candys={34} groups={5} />
			<KmPerHour kilometers={120} hours={4} />
			<ApplesMacaranation apples={320} boxes={10} />
			<LeftScrews screws={62} boxes={12} />
		</>
	);
};

export default App;
