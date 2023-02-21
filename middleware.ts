import { NextRequest, NextResponse } from 'next/server';
import { authToken } from './config/constants';

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.match(/\/(signin|signup).*/) &&
    req.cookies.get(authToken)
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (req.nextUrl.pathname.startsWith('/cart') && !req.cookies.get(authToken)) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}
