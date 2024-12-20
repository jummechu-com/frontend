import './index.scss'
import Image from 'next/image'
import Process from '@/app/_resourse/assets/images/process.png'
import Checkbox from '@/widgets/ui/Checkbox'
import Test01 from '@/app/_resourse/assets/images/test1_01.png'
import Test02 from '@/app/_resourse/assets/images/test1_02.png'
import Test03 from '@/app/_resourse/assets/images/test1_03.png'

export default function Home() {
	return (
		<main>
			<section className="processContainer">
				<Image
					className="processIcon"
					src={Process}
					alt="점메츄"
					width={35}
					height={25}
				/>
				<div className="process"></div>
				<div className="processBar"> </div>
			</section>
			<div className="text-wrap">
				<h1>어떤 방식으로 골라볼까?</h1>
			</div>
			<div className={' testCheckBox active'}>
				<Checkbox checked={true} id="test01" />
				<p>
					먹고싶은걸 <span>고를래!</span>
				</p>
				<Image src={Test01} alt="먹고싶은걸 고를래!" width={67} height={61} />
			</div>
			<div className={`testCheckBox`}>
				<Checkbox checked={true} id="test02" />
				<p>
					안땡기는걸 <span>뺄래!</span>
				</p>
				<Image src={Test02} alt="먹고싶은걸 고를래!" width={67} height={61} />
			</div>
			<div className={`testCheckBox`}>
				<Checkbox checked={true} id="test03" />
				<p>
					<span>아무거나</span> 먹을래!
				</p>
				<Image
					src={Test03}
					alt="먹고싶은걸 고를래!"
					height={61}
					className="img-full"
				/>
			</div>
			<button className="btn bottom text-semibold">다음</button>
		</main>
	)
}
