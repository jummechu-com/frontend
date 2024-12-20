import type { NextConfig } from 'next'
import path from 'path'
import { MOCK_API_URL, USE_MOCK } from '@/shared/constant/globalConstants'
import { Rewrite } from 'next/dist/lib/load-custom-routes'

const rewritesOptions: NextConfig['rewrites'] = async () => {
	const rewrites: Rewrite[] = []

	if (USE_MOCK) {
		rewrites.push({
			source: '/api/:path*',
			destination: `${MOCK_API_URL}/api/:path*`,
		})
	}

	return rewrites
}

const nextConfig: NextConfig = {
	/* config options here */
	images: {},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	experimental: {
		reactCompiler: true,
		// 도메인 추가 설정 필요
		serverActions: {
			allowedOrigins: ['localhost:3000'],
		},
	},
	rewrites: rewritesOptions,
}

export default nextConfig
