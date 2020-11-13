import React from 'react'
import { GrFacebook } from "react-icons/gr";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const ShareSocialMedia = () => (
  <div className="content-icons">
    <div className="box-icon">
      <GrFacebook color='#fff' size='30'></GrFacebook>
    </div>
    <div className="box-icon bg-icons">
      <GrGooglePlus color='#ea3d3d' size='20'></GrGooglePlus>
    </div>
    <div className="box-icon">
      <GrLinkedin color='#fff' size='30'></GrLinkedin>
    </div>
    <div className="box-icon bg-icons">
      <FaTwitter color='#ea3d3d' size='20'></FaTwitter>
    </div>
  </div>
)

export default ShareSocialMedia;
