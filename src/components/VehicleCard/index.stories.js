import React from 'react'
import styled from '@emotion/styled/macro'
import { storiesOf } from '@storybook/react'
import VehicleCard from './index'

storiesOf('Components|VehicleCard', module).add('content', () => (
  <VehicleCard
    imageUrl="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg"
    title="2018 Toyota Corolla"
    details={['S 4dr Sedan', '9434 miles', 'Another']}
    price="$16,960"
    payment="$350/mo"
  />
))
