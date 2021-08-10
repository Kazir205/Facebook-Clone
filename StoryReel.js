import React from 'react'
import Story from './Story'
import { AddStory } from './Story'
import './storyreel.css'

function StoryReel() {
    return (
        <div className="story__reel">
            {/* story */}
            <AddStory text="Create Story" />
            <Story 
            image="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/s280x280/225399759_1222864008160795_2583308849336717774_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=365331&_nc_eui2=AeFtTguN4qAHkqx-Oh7gVBermpq7_Bq88RWamrv8GrzxFU1a6fSCJvU3Fh39qhsEwbMbunxrAjSa22tXyNOGVAgN&_nc_ohc=MWb68NAJDpgAX9fQGd8&_nc_ht=scontent.fdac24-1.fna&oh=b296eb64fccb0e57bdef262734b185dc&oe=612F5F28"
            profileSrc="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.18169-1/p100x100/23472484_358513304595874_5998261101090892145_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGhXrNQ_NNy48RgpJif0S38Xfm1GOiMcLFd-bUY6IxwsZYVqJD0MG5AHypA49vU8rXkaRBgsaDORHGXl2rSFMot&_nc_ohc=F-XxSVeuKycAX_HYm85&_nc_ad=z-m&_nc_cid=1112&_nc_ht=scontent.fdac24-1.fna&oh=488215ea67a9398e7ff3b41506b14602&oe=612F04C0"
            title="Ismil Hossain"
            />
            <Story 
            image="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg"
            profileSrc="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg"
            title="Elon Musk"
            />
            <Story 
            image="data:image/jpeg;base64,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"
            profileSrc="https://im.indiatimes.in/amp/2019/May/mark_zuckerberg_1556776740_1200x900.jpg"
            title="Mark Zuckerburg"
            />
            <Story 
            image="https://ichef.bbci.co.uk/news/976/cpsprodpb/7A8E/production/_118547313_gettyimages-1174968719.jpg"
            profileSrc="data:image/jpeg;base64,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"
            title="Bill Gates"
            />
            {/* story */}
            {/* story */}
            {/* story */}
            {/* story */}
        </div>
    )
}

export default StoryReel
