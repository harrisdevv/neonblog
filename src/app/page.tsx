import Image from "next/image";

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M8 10h.01"/>
    <path d="M12 10h.01"/>
    <path d="M16 10h.01"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="flex justify-between items-center w-full p-4">
        <div className="flex gap-4">
          <button className="bg-black/30 text-white px-4 py-2 rounded-full flex items-center">
            <ImageIcon />
            <span className="ml-2">More Like This</span>
          </button>
          <button className="bg-black/30 text-white px-4 py-2 rounded-full">Save</button>
          <button className="bg-black/30 text-white px-4 py-2 rounded-full flex items-center">
            <LinkIcon />
            <span className="ml-2">Permalink</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span>Light</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Dark</span>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full">Contact me</button>
        </div>
      </header>
      <main className="flex-grow flex justify-between items-center px-20">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-light mb-4">FULL-STACK WEB DEVELOPER</h1>
          <h2 className="text-8xl font-bold mb-8">Hien<br />The Phan</h2>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl flex items-center">
            <DownloadIcon />
            <span className="ml-2">CV</span>
          </button>
          <p className="mt-8 max-w-md text-lg">
            I&apos;m a full-stack web developer and I work remotely from South of Vietnam.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-3xl"></div>
          <Image src="/avatar.png" alt="Hien The Phan" width={400} height={400} className="rounded-full relative z-10" />
        </div>
      </main>
      {/* <aside className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <Image src="/psd-icon.png" alt="PSD Icon" width={100} height={100} />
      </aside> */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <a href="#" className="text-white hover:text-purple-400"><DiscordIcon /></a>
        <a href="#" className="text-white hover:text-purple-400"><FacebookIcon /></a>
        <a href="#" className="text-white hover:text-purple-400"><InstagramIcon /></a>
        <a href="#" className="text-white hover:text-purple-400"><TwitterIcon /></a>
        <a href="#" className="text-white hover:text-purple-400"><YoutubeIcon /></a>
        <a href="#" className="text-white hover:text-purple-400"><SendIcon /></a>
      </div>
    </div>
  );
}
