import React from 'react'
import Hero from 'grommet/components/Hero'
import Animate from 'grommet/components/Animate'
import Image from 'grommet/components/Image'
import Heading from 'grommet/components/Heading'

/* eslint-disable camelcase */

export const ArtistHero = ({ picture_big, name, children }) => picture_big ? (
  <Animate enter={{'animation': 'slide-up', 'duration': 300, 'delay': 0}}>
    <Hero background={<Image src={picture_big}
      fit='cover' />}
      backgroundColorIndex='dark'
      size='large'>
      <Heading margin='none' align='center'>
        { name }
      </Heading>
      { children }
    </Hero>
  </Animate>
) : null
