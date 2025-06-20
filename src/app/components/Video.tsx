export default function Video() {
  return (
    <section
      className="bg-violet flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 min-h-[60vh] w-full"
      aria-label="Video section"
    >
      <div className="bg-gold p-4 sm:p-6 rounded-lg shadow-md w-full max-w-[740px] mx-auto">
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/LlSP_oEMAsM?si=rHtteMvfUWVGCbxG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Fallback content */}
      <div className="mt-4 text-center text-white text-sm sm:text-base">
        <p>Si la vidéo ne s’affiche pas, <a href="https://www.youtube.com/watch?v=LlSP_oEMAsM" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">cliquez ici pour la voir sur YouTube</a>.</p>
      </div>
    </section>
  );
}