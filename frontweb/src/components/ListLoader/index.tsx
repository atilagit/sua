import ContentLoader from 'react-content-loader'

const ListLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1400}
      height={900}
      viewBox="0 0 1400 900"
      backgroundColor="#c8c8c8"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="110" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="220" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="330" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="440" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="550" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="660" rx="25" ry="25" width="1120" height="94" />
      <rect x="0" y="770" rx="25" ry="25" width="1120" height="94" />
    </ContentLoader>
  )
}

export default ListLoader