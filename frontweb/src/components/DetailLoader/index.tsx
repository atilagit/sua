import React from "react"
import ContentLoader from "react-content-loader"

const DetailLoader = () => (
  <ContentLoader 
    speed={2}
    width={1400}
    height={300}
    viewBox="0 0 1400 300"
    backgroundColor="#c8c8c8"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="5" rx="5" ry="5" width="100" height="12" /> 
    <rect x="0" y="25" rx="5" ry="5" width="365" height="40" /> 
    <rect x="375" y="5" rx="5" ry="5" width="100" height="12" /> 
    <rect x="375" y="25" rx="5" ry="5" width="178" height="40" /> 
    <rect x="563" y="5" rx="5" ry="5" width="100" height="12" /> 
    <rect x="563" y="25" rx="5" ry="5" width="178" height="40" /> 
    <rect x="751" y="5" rx="5" ry="5" width="100" height="12" /> 
    <rect x="751" y="25" rx="5" ry="5" width="178" height="40" /> 
    <rect x="939" y="5" rx="5" ry="5" width="100" height="12" /> 
    <rect x="939" y="25" rx="5" ry="5" width="178" height="40" /> 

    <rect x="0" y="100" rx="5" ry="5" width="100" height="12" /> 
    <rect x="0" y="125" rx="5" ry="5" width="368" height="40" /> 
    <rect x="375" y="100" rx="5" ry="5" width="100" height="12" /> 
    <rect x="375" y="125" rx="5" ry="5" width="368" height="40" /> 
    <rect x="750" y="100" rx="5" ry="5" width="100" height="12" /> 
    <rect x="750" y="125" rx="5" ry="5" width="368" height="40" /> 
    
    <rect x="0" y="205" rx="5" ry="5" width="100" height="12" /> 
    <rect x="0" y="225" rx="5" ry="5" width="1120" height="40" />
  </ContentLoader>
)

export default DetailLoader