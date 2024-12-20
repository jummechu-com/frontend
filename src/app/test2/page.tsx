import './index.scss'
import Image from 'next/image'
import Process from '@/app/_resourse/assets/images/process.png'
import Checkbox from '@/widgets/ui/Checkbox'
import Test01 from '@/app/_resourse/assets/images/test2_01.png'
import Test02 from '@/app/_resourse/assets/images/test2_02.png'
import Test03 from '@/app/_resourse/assets/images/test2_03.png'
import Test04 from '@/app/_resourse/assets/images/test2_04.png'
import Test05 from '@/app/_resourse/assets/images/test2_05.png'
import Test06 from '@/app/_resourse/assets/images/test2_06.png'

const gridItems = [
	{
		text: '간단한거',
		description: '토스트/밥버거/브리또/포케/죽',
		src: Test01,
		checked: false,
	},
	{
		text: '면 종류',
		description: '짜장&짬뽕/파스타/잔치국수',
		src: Test02,
		checked: true,
	},
	{
		text: '뜨끈한 국물',
		description: '국밥/부대찌개/칼국수',
		src: Test03,
		checked: false,
	},
	{
		text: '바삭한거',
		description: '돈까스/튀김덮밥',
		src: Test04,
		checked: false,
	},
	{
		text: '밥 종류',
		description: '백반/국밥/덮밥/볶음밥',
		src: Test05,
		checked: false,
	},
	{
		text: '미국 감성',
		description: '서브웨이/햄버거/피자/샐러드',
		src: Test06,
		checked: false,
	},
]

export default function Home() {
	return (
		<main>
			<section className="processContainer step2">
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
				<h1>오늘 이게 땡겨</h1>
				<p className="text-normal">보기 하나만 선택</p>
			</div>
			<div className="testCheckBoxGrid">
				{gridItems.map((item, i) => (
					<div key={i} className={`testCheckBox ${item.checked && 'active'}`}>
						<Image
							src={item.src}
							alt="먹고싶은걸 고를래!"
							width={68}
							height={68}
						/>
						<Checkbox checked={item.checked} id={`test0${i + 1}`} />
						<p
							className={`title ${item.checked ? 'text-bold' : 'text-medium'}`}
						>
							{item.text}
						</p>
						<p className="desc text-medium">{item.description}</p>
					</div>
				))}
			</div>
			<div className="btn2colum">
				<button className="btn bordered text-semibold">이전</button>
				<button
					className={`btn text-semibold ${gridItems.find((item) => item.checked == true) && 'active'}`}
				>
					다음
				</button>
			</div>
		</main>
	)
}
