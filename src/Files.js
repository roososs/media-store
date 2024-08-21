import './App.scss'
import DownloadCard from './components/DownloadCard'
import FileCard from './components/FileCard'
import files from './data/filesData'

function Files() {
  return (
    <div className='App'>
      <div className='title-page'>File store.</div>
      <div className='card-container'>
        <DownloadCard />
        {files.map((file) => {
          return (
            <FileCard
              fileName={file.name}
              fileDate={file.date}
              cardColor={file.color}
              icon={file.icon}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Files
