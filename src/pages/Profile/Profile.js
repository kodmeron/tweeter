import React from 'react'
import FirstSection from './sections/FirstSection/FirstSection'
import SecondSection from './sections/SecondSection/SecondSection'
import ThirdSection from './sections/ThirdSection/ThirdSection'
import { ProfileStyles } from './styles'
const Profile = () => {
  return (
    <ProfileStyles>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </ProfileStyles>
  )
}

export default Profile