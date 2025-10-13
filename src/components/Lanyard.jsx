import { useEffect, useState } from 'react'

const Lanyard = ({ userId, theme = 'dark' }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  if (loading) {
    return (
      <div className={`rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  const status = data.discord_status
  const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500'
  }

  const statusText = {
    online: '온라인',
    idle: '자리 비움',
    dnd: '다른 용무 중',
    offline: '오프라인'
  }

  return (
    <div className={`rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex items-center gap-4">
        {/* 프로필 이미지 */}
        <div className="relative">
          <img
            src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
            alt={data.discord_user.username}
            className="w-16 h-16 rounded-full"
          />
          {/* 상태 표시 */}
          <div className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'} ${statusColors[status]}`}></div>
        </div>

        {/* 사용자 정보 */}
        <div className="flex-1">
          <h3 className="text-xl font-bold">
            {data.discord_user.username}
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {statusText[status]}
          </p>

          {/* 활동 정보 */}
          {data.activities && data.activities.length > 0 && (
            <div className="mt-2">
              {data.activities.map((activity, index) => (
                <div key={index} className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {activity.type === 0 && `🎮 ${activity.name} 플레이 중`}
                  {activity.type === 2 && `🎵 ${activity.details || activity.name} 듣는 중`}
                  {activity.type === 4 && activity.state}
                </div>
              ))}
            </div>
          )}

          {/* Spotify */}
          {data.spotify && (
            <div className="mt-2 flex items-center gap-2">
              <img
                src={data.spotify.album_art_url}
                alt={data.spotify.album}
                className="w-10 h-10 rounded"
              />
              <div>
                <p className="text-sm font-medium">{data.spotify.song}</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data.spotify.artist}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Lanyard
