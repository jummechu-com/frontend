import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
	const url = request.nextUrl
	// 헤더 노출하지 않는 페이지 경로
	const hideHeaderPaths = ['/', '/login', '/signup']
	const response = NextResponse.next()

	if (hideHeaderPaths.includes(url.pathname)) {
		response.headers.set('x-show-header', 'false')
	} else {
		response.headers.set('x-show-header', 'true')
	}

	return response
}
