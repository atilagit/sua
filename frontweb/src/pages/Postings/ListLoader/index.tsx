import ContentLoader from 'react-content-loader'

const ListLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1400}
      height={850}
      viewBox="0 0 1400 850"
      backgroundColor="#c8c8c8"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="15" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="115" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="215" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="315" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="415" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="515" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="615" rx="5" ry="5" width="1130" height="85" />
      <rect x="0" y="715" rx="5" ry="5" width="1130" height="85" />
    </ContentLoader>
  )
}

export default ListLoader