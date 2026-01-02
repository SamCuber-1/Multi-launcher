"use client"

import { useState } from 'react'

const servers = [
  {
    "id": "1",
    "ip": "Squid_Latam_Games.aternos.me",
    "name": "Squid Latam",
    "port": "64004",
    "imageUrl": "https://cdn.discordapp.com/attachments/1327822652957790239/1345270402079002695/title_2.png?ex=6958acb1&is=69575b31&hm=766cabdd85be7b3fccad70d4dddd67c3105777218ea7cc326319d46a265e11e4&"
  },
  {
    "id": "1767363878546",
    "ip": "Multi-Safio_reboot.aternos.me",
    "name": "Multi-Safio",
    "port": "22228",
    "imageUrl": "https://cdn.discordapp.com/attachments/1327822652957790239/1333187305556545598/1737926939879.png?ex=6958e1af&is=6957902f&hm=7eaff29116b274b8e595b938e8cf0d6c4ccb7f149b1912e5296d2094069b1c06&"
  }
]

export default function LauncherPage() {
  const [activeServer, setActiveServer] = useState(0)

  const handlePlay = () => {
    const server = servers[activeServer]
    if (server) {
      const ip = server.ip || 'play.server.com'
      const port = server.port || '19132'
      window.location.href = `minecraft://connect/?serverUrl=${ip}&serverPort=${port}`
    }
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      
      <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0f' }} />
      

      {/* Server sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-black/50 backdrop-blur-sm flex flex-col items-center py-4 gap-3 z-50">
        
    <button
      key="1"
      onClick={() => setActiveServer(0)}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeServer === 0 ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-black' : 'hover:scale-110'}`}
      style={{ backgroundColor: '#3b82f6' }}
      title="Squid Latam"
    >
      <img src="https://cdn.discordapp.com/attachments/1327822652957790239/1345270402079002695/title_2.png?ex=6958acb1&is=69575b31&hm=766cabdd85be7b3fccad70d4dddd67c3105777218ea7cc326319d46a265e11e4&" alt="Squid Latam" className="w-full h-full rounded-full object-cover" />
    </button>
  

    <button
      key="1767363878546"
      onClick={() => setActiveServer(1)}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeServer === 1 ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-black' : 'hover:scale-110'}`}
      style={{ backgroundColor: '#3b82f6' }}
      title="Multi-Safio"
    >
      <img src="https://cdn.discordapp.com/attachments/1327822652957790239/1333187305556545598/1737926939879.png?ex=6958e1af&is=6957902f&hm=7eaff29116b274b8e595b938e8cf0d6c4ccb7f149b1912e5296d2094069b1c06&" alt="Multi-Safio" className="w-full h-full rounded-full object-cover" />
    </button>
  
        
        {/* Settings button */}
        <button className="mt-auto w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 transition-colors">
          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Elements */}
      <div className="absolute inset-0 ml-16">
        
        <div key="title" style={{
          
      position: 'absolute',
      left: '93.54417780064006%',
      top: '5.7795344172297245%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
    
          fontSize: '8px',
          fontWeight: '900',
          color: '#ffffff',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}>
          Multi-Studios
        </div>
      

        <button key="button" onClick={() => handlePlay()} style={{
          
      position: 'absolute',
      left: '50%',
      top: '84.25713606138487%',
      transform: 'translate(-50%, -50%)',
      zIndex: 8,
    
          fontSize: '18px',
          fontWeight: '700',
          color: '#000000',
          backgroundColor: '#3b82f6',
          padding: '12px 32px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          JUGAR
        </button>
      

        <img key="image-1767363849686" src="/placeholder.svg" alt="" style={{
          
      position: 'absolute',
      left: '50%',
      top: '30%',
      transform: 'translate(-50%, -50%)',
      zIndex: 11,
    
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          opacity: 100,
          borderRadius: '0px',
        }} />
      
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-50">
        <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-bold rounded">EXO</span>
        <span className="text-white text-sm font-medium">Studios</span>
      </div>
    </main>
  )
}
