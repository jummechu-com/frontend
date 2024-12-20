import './index.scss'
import Image from 'next/image'
import Process from '@/app/_resourse/assets/images/process.png'
import Checkbox from '@/widgets/ui/Checkbox'

const items = [
	{
		description: '뜨끈한 국물의~',
		menuNames: ['짬뽕', '잔치국수'],
		checked: false,
	},
	{
		description: '꾸덕한~',
		menuNames: ['파스타', '마제소바', '짜장면'],
		checked: false,
	},
	{
		description: '머리 띵하게 차가운~',
		menuNames: ['물냉면', '소바', '밀면'],
		checked: false,
	},
	{
		description: '오른손으로 비비고 왼손으로 비비고~',
		menuNames: ['비빔냉면', '비빔국수', '막국수'],
		checked: false,
	},
	{
		description: '오른손으로 비비고 왼손으로 비비고~',
		menuNames: ['비빔냉면', '비빔국수', '막국수'],
		checked: false,
	},
]

export default function Home() {
	return (
		<main>
			<section className="processContainer step3">
				<Image
					className="processIcon"
					src={Process}
					alt="점메츄"
					width={35}
					height={25}
				/>
				<div className="process"></div>
				<div className="processBar"></div>
			</section>
			<div className="text-wrap">
				<h1>간단한 것 중에 어떤 거?</h1>
			</div>
			{items.map((item, i) => (
				<div key={i} className={`testCheckBox ${item.checked && 'active'}`}>
					<div className="text-wrap">
						<p
							className={`title ${item.checked ? 'text-bold' : 'text-medium'}`}
						>
							{item.description}
						</p>
						<p className="desc text-semibold gray2">
							{item.menuNames.join('/')}
						</p>
					</div>
					<Checkbox checked={item.checked} id={`test0${i + 1}`} />
				</div>
			))}
			<button
				className={`btn bottom text-semibold ${items.find((item) => item.checked == true) && 'active'}`}
			>
				제출하기
			</button>
		</main>
	)
}
