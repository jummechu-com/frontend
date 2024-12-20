import styles from './Header.module.scss'
import Image from 'next/image'
import ArrowBack from '@/app/_resourse/assets/images/arrow_left.svg'
import Logo from '@/app/_resourse/assets/images/logo.png'

export default function Header() {
	return (
		<section className={styles.nav}>
			<header>
				<Image src={ArrowBack} alt="back" width={26} height={26} />
				<Image
					className={styles.logo}
					src={Logo}
					alt="점메츄"
					width={65}
					height={21}
				/>
			</header>
		</section>
	)
}
