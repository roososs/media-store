import { DownloadOutlined } from '@ant-design/icons'
import '../App.scss'

function FileCard({ fileName, fileDate, cardColor, icon }) {
  return (
    <div className={'card ' + cardColor}>
      <div div className='img-card'>
        {icon}
      </div>
      <div className='info-card'>
        <div>
          <div className='title'>
            <span>{fileName}</span>
          </div>
          <div className='secondary-title'>
            <span>{fileDate}</span>
          </div>
        </div>
        <div className='download-icon'>
          <DownloadOutlined />
        </div>
      </div>
    </div>
  )
}
export default FileCard
