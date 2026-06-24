export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div className="video-thumb" style={{ backgroundImage: `url(${video.thumb})` }}>
        <div className="play-circle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polygon points="7,4 16,10 7,16" fill="#1a6fb5" />
          </svg>
        </div>
        {video.dur && <span className="vid-dur">{video.dur}</span>}
      </div>
      <div className="vid-info">
        <p className="vid-title">{video.title}</p>
      </div>
    </div>
  );
}
