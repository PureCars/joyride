import React from 'react'
import styled from '@emotion/styled/macro'
import { storiesOf } from '@storybook/react'
import VehicleList from './index'

const data = [
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2018 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  },
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2017 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  },
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2018 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  },
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2018 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  },
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2018 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  },
  {
    imageUrl:
      'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg',
    title: '2018 Toyota Corolla',
    details: ['S 4dr Sedan', '9,434 miles'],
    price: '$16,960',
    payment: '$350/mo'
  }
]

storiesOf('Components|VehicleList', module).add('content', () => (
  <VehicleList vehicles={data} />
))
