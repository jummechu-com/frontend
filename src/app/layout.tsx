import type { Metadata } from 'next'
import { Viewport } from 'next'
import { headers } from 'next/headers'
import '@/app/_resourse/assets/scss/index.scss'
import React from 'react'
import genMetadata from '@/app/_head/metadata'
import genViewPort from '@/app/_head/viewport'
import Header from '@/widgets/ui/Header/Header'

export const metadata: Metadata = {
	...genMetadata({
		title: '점메츄',
		description: '점메츄',
	}),
}

export function generateViewport(): Viewport {
	return genViewPort()
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// 서버 사이드에서 헤더 확인
	const headersList = await headers()
	const showHeader = headersList.get('x-show-header') !== 'false'

	return (
		<html lang="ko">
			<body className={`layout antialiased`}>
				{showHeader && <Header />}
				{children}
			</body>
		</html>
	)
}
