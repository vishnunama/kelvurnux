import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#0b0b0f] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-16 sm:py-24">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(0, 235, 170, 0.12) 0%, rgba(11, 11, 15, 0) 100%)',
        }}
      />

      <div className="max-w-md w-full text-center relative z-10">
        <span className="text-7xl sm:text-8xl md:text-9xl font-black text-[#00ebaa] tracking-tight block mb-2 opacity-90">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-black bg-[#00ebaa] hover:bg-[#00ebaa]/90 transition-colors"
          >
            Back to Home
          </Link>

          <Link
            href="/turnkey-casino-software-solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
