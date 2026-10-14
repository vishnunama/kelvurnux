import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/crypto-igaming-Solutions') {
    const url = request.nextUrl.clone();
    url.pathname = '/crypto-igaming-solutions';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/crypto-igaming-Solutions'],
};
