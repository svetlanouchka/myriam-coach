export default function Video() {
  return (
    <div className="bg-violet flex flex-col items-center justify-center px-4 py-12 sm:px-10 sm:py-16 min-h-[60vh]">
      <div className="bg-gold p-4 sm:p-6 rounded-lg shadow-md w-full max-w-[560px]">
        <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/LlSP_oEMAsM?si=rHtteMvfUWVGCbxG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}