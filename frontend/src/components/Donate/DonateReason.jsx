import staffImg from '../../images/donate_reason_type_staff.png';
import logisticsImg from '../../images/donate_reason_type_logistics.png';
import inventoryImg from '../../images/donate_reason_type_inventory.png';

const DonateReason = () => {
	return (
		<div className="donate__reasons">
			<h3 className="donate__reasons-title">На что нужны пожертвования</h3>
			<ul className="donate__reasons-list">
					<li className="donate__reason">
						<img className="donate__reason-image" src={staffImg} alt="схематичное изображение человека" />
						<div className='donate__text'>
							<h4 className="donate__reason-title">Зарплата персонала</h4>
							<p className="donate__reason-description">Мы стараемся приглашать в фонд квалифицированных специалистов.</p>
						</div>
					</li>
					<li className="donate__reason">
						<img className="donate__reason-image" src={inventoryImg} alt="схематичное изображение двух кисточек" />
						<div className='donate__text'>
							<h4 className="donate__reason-title">Инвентарь</h4>
							<p className="donate__reason-description">Для проведения различных активностей требуется инвентарь.</p>
						</div>
					</li>
					<li className="donate__reason">
						<img className="donate__reason-image" src={logisticsImg} alt="схематичное изображение коробки" />
						<div className='donate__text'>
							<h4 className="donate__reason-title">Логистика</h4>
							<p className="donate__reason-description">Для проведения различных активностей требуется инвентарь.</p>
						</div>
					</li>
				</ul>
			</div>
	);
}
export default DonateReason;