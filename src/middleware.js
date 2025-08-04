import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    console.log('from middleware', req.nextUrl.pathname);
    const token = await getToken({
        req,
        secureCookie: process.env.NODE_ENV === "production" ? true : false
    })
    if (token) {
        return NextResponse.next()
    }
    else {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
}

export const config = {
    matcher: [
        '/myBookings',
        '/myBookings/:path*',
        '/checkout/:path*'
    ]
}