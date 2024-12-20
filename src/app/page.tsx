import Image from 'next/image'
import onBoardingImg from '@/app/_resourse/assets/images/onboarding.svg'
import onBoardingImg01 from '@/app/_resourse/assets/images/onboarding_01.png'
import kakaoLogin from '@/app/_resourse/assets/images/kakao_login.png'

export default function OnBoarding() {
	return (
		<main className="onboardinPage bg-primary h-screen w-full p-5 text-lg font-bold">
			<Image
				src={onBoardingImg}
				alt="logo"
				width={170}
				height={154}
				className="logoNText"
			/>
			<Image
				src={onBoardingImg01}
				alt="logo"
				width={265}
				height={160}
				className="mx-auto mb-5 img1"
			/>
			<button className="text-primary mx-auto -mt-5 block w-full rounded-lg bg-white py-3">
				로그인
			</button>
			<button className="img login-btn mt-2">
				<Image
					src={kakaoLogin}
					alt="logo"
					width={335}
					height={58}
					className="mx-auto"
				/>
			</button>
			<div className="mt-3 text-center text-xs text-white">
				계정이 없으신가요?
				<a href="/signin" className="ml-1">
					회원가입
				</a>
				하기
			</div>
		</main>
	)
}
