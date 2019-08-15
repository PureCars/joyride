import React from 'react'
import styled from '@emotion/styled/macro'
import { storiesOf } from '@storybook/react'
import VehicleFeatures from './index'

var data = {
  id: 'aab24b6f5ed04bc087405652ca1cd474-19XFC1F90HE013153',
  title: '2017 Honda Civic',
  subtitle: 'Touring',
  condition: 'Used',
  mileage: 31376,
  featureLevel: 'Basic',
  featureLevelDescription: 'Basic Features',
  overview: '',
  warranties: [
    {
      category: 'Basic',
      limit: '3 Years, 36,000 Miles'
    },
    {
      category: 'Corrosion',
      limit: '5 Years, Unlimited Miles'
    },
    {
      category: 'Drivetrain',
      limit: '5 Years, 60,000 Miles'
    },
    {
      category: 'Roadside Assistance',
      limit: '3 Years, 36,000 Miles'
    }
  ],
  features: [
    {
      name: '4 Cylinder Engine'
    },
    {
      name: 'A/T',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/AT.png'
    },
    {
      name: 'ABS'
    },
    {
      name: 'Adaptive Cruise Control'
    },
    {
      name: 'Adjustable Steering Wheel'
    },
    {
      name: 'Aluminum Wheels'
    },
    {
      name: 'AM/FM Stereo'
    },
    {
      name: 'Auto-Dimming Rearview Mirror'
    },
    {
      name: 'Back-Up Camera',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/backup-camera.png'
    },
    {
      name: 'Bucket Seats'
    },
    {
      name: 'Climate Control'
    },
    {
      name: 'Cruise Control'
    },
    {
      name: 'Daytime Running Lights'
    },
    {
      name: 'Driver Air Bag'
    },
    {
      name: 'Driver Vanity Mirror'
    },
    {
      name: 'Engine Immobilizer'
    },
    {
      name: 'Floor Mats'
    },
    {
      name: 'Fog Lamps'
    },
    {
      name: 'Front Head Air Bag'
    },
    {
      name: 'Front Side Air Bag'
    },
    {
      name: 'Front Wheel Drive',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/front-wheel-drive.png'
    },
    {
      name: 'Heated Mirrors'
    },
    {
      name: 'Intermittent Wipers'
    },
    {
      name: 'Keyless Entry'
    },
    {
      name: 'Lane Departure Warning'
    },
    {
      name: 'Leather Seats',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/leather-seats.png'
    },
    {
      name: 'Leather Steering Wheel'
    },
    {
      name: 'MP3 Player'
    },
    {
      name: 'Navigation System',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/icon-feature-navigation.svg'
    },
    {
      name: 'Pass-Through Rear Seat'
    },
    {
      name: 'Passenger Air Bag Sensor'
    },
    {
      name: 'Power Door Locks'
    },
    {
      name: 'Power Steering'
    },
    {
      name: 'Power Windows'
    },
    {
      name: 'Rear Defrost'
    },
    {
      name: 'Remote Engine Start'
    },
    {
      name: 'Security System'
    },
    {
      name: 'Sun/Moonroof',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/sun-moonroof.png'
    },
    {
      name: 'Temporary Spare Tire',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/temporary-spare-tire.png'
    },
    {
      name: 'Tire Pressure Monitor',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/tire-pressure-monitor.png'
    },
    {
      name: 'Tires - Front Performance',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/tires-front-performance.png'
    },
    {
      name: 'Traction Control',
      imageUrl:
        'https://stockphotosplayground.blob.core.windows.net/static/feature-icons-v2/png/tires-traction-control.png'
    },
    {
      name: 'Trip Computer'
    }
  ],
  price: {
    cash: 21500.0,
    lease: 0.0,
    monthly: 384.79191714491056888918048526
  },
  photos: [
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f3c8d0faaa44472e92c5d53c5ec726a1.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f3c8d0faaa44472e92c5d53c5ec726a1.jpg',
        md:
          'http://content.homenetiol.com/640x480/f3c8d0faaa44472e92c5d53c5ec726a1.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f3c8d0faaa44472e92c5d53c5ec726a1.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/43bddebbb959425aaaaf6efada96bc40.jpg',
        sm:
          'http://content.homenetiol.com/640x480/43bddebbb959425aaaaf6efada96bc40.jpg',
        md:
          'http://content.homenetiol.com/640x480/43bddebbb959425aaaaf6efada96bc40.jpg',
        lg:
          'http://content.homenetiol.com/640x480/43bddebbb959425aaaaf6efada96bc40.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/898fbc4fa2c243a28a1e6212a0ffa975.jpg',
        sm:
          'http://content.homenetiol.com/640x480/898fbc4fa2c243a28a1e6212a0ffa975.jpg',
        md:
          'http://content.homenetiol.com/640x480/898fbc4fa2c243a28a1e6212a0ffa975.jpg',
        lg:
          'http://content.homenetiol.com/640x480/898fbc4fa2c243a28a1e6212a0ffa975.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f21c0d78c7a74d0d89dfd93d5dd1c72f.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f21c0d78c7a74d0d89dfd93d5dd1c72f.jpg',
        md:
          'http://content.homenetiol.com/640x480/f21c0d78c7a74d0d89dfd93d5dd1c72f.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f21c0d78c7a74d0d89dfd93d5dd1c72f.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/a095dce8c4c44be594c91499e209e649.jpg',
        sm:
          'http://content.homenetiol.com/640x480/a095dce8c4c44be594c91499e209e649.jpg',
        md:
          'http://content.homenetiol.com/640x480/a095dce8c4c44be594c91499e209e649.jpg',
        lg:
          'http://content.homenetiol.com/640x480/a095dce8c4c44be594c91499e209e649.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/9d0b49c70176431eb7e0e14a1fd9b589.jpg',
        sm:
          'http://content.homenetiol.com/640x480/9d0b49c70176431eb7e0e14a1fd9b589.jpg',
        md:
          'http://content.homenetiol.com/640x480/9d0b49c70176431eb7e0e14a1fd9b589.jpg',
        lg:
          'http://content.homenetiol.com/640x480/9d0b49c70176431eb7e0e14a1fd9b589.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f77bb2cc45ee4a979c05fb45b8e07b83.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f77bb2cc45ee4a979c05fb45b8e07b83.jpg',
        md:
          'http://content.homenetiol.com/640x480/f77bb2cc45ee4a979c05fb45b8e07b83.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f77bb2cc45ee4a979c05fb45b8e07b83.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/a1967289bc94417eb56ee1f52b4be788.jpg',
        sm:
          'http://content.homenetiol.com/640x480/a1967289bc94417eb56ee1f52b4be788.jpg',
        md:
          'http://content.homenetiol.com/640x480/a1967289bc94417eb56ee1f52b4be788.jpg',
        lg:
          'http://content.homenetiol.com/640x480/a1967289bc94417eb56ee1f52b4be788.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/cf038aa7e3fe4e2b93e11bb91a4b4739.jpg',
        sm:
          'http://content.homenetiol.com/640x480/cf038aa7e3fe4e2b93e11bb91a4b4739.jpg',
        md:
          'http://content.homenetiol.com/640x480/cf038aa7e3fe4e2b93e11bb91a4b4739.jpg',
        lg:
          'http://content.homenetiol.com/640x480/cf038aa7e3fe4e2b93e11bb91a4b4739.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/658901df861c4f50a2f6714a3a47cfd3.jpg',
        sm:
          'http://content.homenetiol.com/640x480/658901df861c4f50a2f6714a3a47cfd3.jpg',
        md:
          'http://content.homenetiol.com/640x480/658901df861c4f50a2f6714a3a47cfd3.jpg',
        lg:
          'http://content.homenetiol.com/640x480/658901df861c4f50a2f6714a3a47cfd3.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f9f6d3a57d5845fa9219c818b44908e4.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f9f6d3a57d5845fa9219c818b44908e4.jpg',
        md:
          'http://content.homenetiol.com/640x480/f9f6d3a57d5845fa9219c818b44908e4.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f9f6d3a57d5845fa9219c818b44908e4.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/bc51f62dce564a78af53db5c0b91bcd0.jpg',
        sm:
          'http://content.homenetiol.com/640x480/bc51f62dce564a78af53db5c0b91bcd0.jpg',
        md:
          'http://content.homenetiol.com/640x480/bc51f62dce564a78af53db5c0b91bcd0.jpg',
        lg:
          'http://content.homenetiol.com/640x480/bc51f62dce564a78af53db5c0b91bcd0.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/91e3892ece4f4648b05da7d91f3748d7.jpg',
        sm:
          'http://content.homenetiol.com/640x480/91e3892ece4f4648b05da7d91f3748d7.jpg',
        md:
          'http://content.homenetiol.com/640x480/91e3892ece4f4648b05da7d91f3748d7.jpg',
        lg:
          'http://content.homenetiol.com/640x480/91e3892ece4f4648b05da7d91f3748d7.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/ca0049c7a7804b0fa7b8915b3b0833e9.jpg',
        sm:
          'http://content.homenetiol.com/640x480/ca0049c7a7804b0fa7b8915b3b0833e9.jpg',
        md:
          'http://content.homenetiol.com/640x480/ca0049c7a7804b0fa7b8915b3b0833e9.jpg',
        lg:
          'http://content.homenetiol.com/640x480/ca0049c7a7804b0fa7b8915b3b0833e9.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/0531a77f97b143a48693d1922bd5fb13.jpg',
        sm:
          'http://content.homenetiol.com/640x480/0531a77f97b143a48693d1922bd5fb13.jpg',
        md:
          'http://content.homenetiol.com/640x480/0531a77f97b143a48693d1922bd5fb13.jpg',
        lg:
          'http://content.homenetiol.com/640x480/0531a77f97b143a48693d1922bd5fb13.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/4a8e0b518aeb4926a2b1cf6cf6adc183.jpg',
        sm:
          'http://content.homenetiol.com/640x480/4a8e0b518aeb4926a2b1cf6cf6adc183.jpg',
        md:
          'http://content.homenetiol.com/640x480/4a8e0b518aeb4926a2b1cf6cf6adc183.jpg',
        lg:
          'http://content.homenetiol.com/640x480/4a8e0b518aeb4926a2b1cf6cf6adc183.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/da81e07ea3d843c2974bf1a67e7f677b.jpg',
        sm:
          'http://content.homenetiol.com/640x480/da81e07ea3d843c2974bf1a67e7f677b.jpg',
        md:
          'http://content.homenetiol.com/640x480/da81e07ea3d843c2974bf1a67e7f677b.jpg',
        lg:
          'http://content.homenetiol.com/640x480/da81e07ea3d843c2974bf1a67e7f677b.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/cd28cb1cf6a849cab2ddaf3f86ec3bc4.jpg',
        sm:
          'http://content.homenetiol.com/640x480/cd28cb1cf6a849cab2ddaf3f86ec3bc4.jpg',
        md:
          'http://content.homenetiol.com/640x480/cd28cb1cf6a849cab2ddaf3f86ec3bc4.jpg',
        lg:
          'http://content.homenetiol.com/640x480/cd28cb1cf6a849cab2ddaf3f86ec3bc4.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/c9e5677c56bc48819e85e0619e955d5d.jpg',
        sm:
          'http://content.homenetiol.com/640x480/c9e5677c56bc48819e85e0619e955d5d.jpg',
        md:
          'http://content.homenetiol.com/640x480/c9e5677c56bc48819e85e0619e955d5d.jpg',
        lg:
          'http://content.homenetiol.com/640x480/c9e5677c56bc48819e85e0619e955d5d.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/06f56676a2724240aa81ae5c35129156.jpg',
        sm:
          'http://content.homenetiol.com/640x480/06f56676a2724240aa81ae5c35129156.jpg',
        md:
          'http://content.homenetiol.com/640x480/06f56676a2724240aa81ae5c35129156.jpg',
        lg:
          'http://content.homenetiol.com/640x480/06f56676a2724240aa81ae5c35129156.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/78d3de78d1f44a77beb3bb64e6dd9b40.jpg',
        sm:
          'http://content.homenetiol.com/640x480/78d3de78d1f44a77beb3bb64e6dd9b40.jpg',
        md:
          'http://content.homenetiol.com/640x480/78d3de78d1f44a77beb3bb64e6dd9b40.jpg',
        lg:
          'http://content.homenetiol.com/640x480/78d3de78d1f44a77beb3bb64e6dd9b40.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/6f0c2958b70644d09eeab35377883741.jpg',
        sm:
          'http://content.homenetiol.com/640x480/6f0c2958b70644d09eeab35377883741.jpg',
        md:
          'http://content.homenetiol.com/640x480/6f0c2958b70644d09eeab35377883741.jpg',
        lg:
          'http://content.homenetiol.com/640x480/6f0c2958b70644d09eeab35377883741.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f2f45b1c5d854ce9991fdf8e62f06145.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f2f45b1c5d854ce9991fdf8e62f06145.jpg',
        md:
          'http://content.homenetiol.com/640x480/f2f45b1c5d854ce9991fdf8e62f06145.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f2f45b1c5d854ce9991fdf8e62f06145.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/882a39896e224e789ee67fcbd01220e8.jpg',
        sm:
          'http://content.homenetiol.com/640x480/882a39896e224e789ee67fcbd01220e8.jpg',
        md:
          'http://content.homenetiol.com/640x480/882a39896e224e789ee67fcbd01220e8.jpg',
        lg:
          'http://content.homenetiol.com/640x480/882a39896e224e789ee67fcbd01220e8.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/4701fdbdc5b44e09b7027edcbf5fcacc.jpg',
        sm:
          'http://content.homenetiol.com/640x480/4701fdbdc5b44e09b7027edcbf5fcacc.jpg',
        md:
          'http://content.homenetiol.com/640x480/4701fdbdc5b44e09b7027edcbf5fcacc.jpg',
        lg:
          'http://content.homenetiol.com/640x480/4701fdbdc5b44e09b7027edcbf5fcacc.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/b58f3f34ae874183992bc08b536f4221.jpg',
        sm:
          'http://content.homenetiol.com/640x480/b58f3f34ae874183992bc08b536f4221.jpg',
        md:
          'http://content.homenetiol.com/640x480/b58f3f34ae874183992bc08b536f4221.jpg',
        lg:
          'http://content.homenetiol.com/640x480/b58f3f34ae874183992bc08b536f4221.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/8b8122f18a7841579c2ee28ad19db857.jpg',
        sm:
          'http://content.homenetiol.com/640x480/8b8122f18a7841579c2ee28ad19db857.jpg',
        md:
          'http://content.homenetiol.com/640x480/8b8122f18a7841579c2ee28ad19db857.jpg',
        lg:
          'http://content.homenetiol.com/640x480/8b8122f18a7841579c2ee28ad19db857.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/ab4de8adde864ac89a3a52885208a59c.jpg',
        sm:
          'http://content.homenetiol.com/640x480/ab4de8adde864ac89a3a52885208a59c.jpg',
        md:
          'http://content.homenetiol.com/640x480/ab4de8adde864ac89a3a52885208a59c.jpg',
        lg:
          'http://content.homenetiol.com/640x480/ab4de8adde864ac89a3a52885208a59c.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f193c689442f4fa29ecefce883829e39.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f193c689442f4fa29ecefce883829e39.jpg',
        md:
          'http://content.homenetiol.com/640x480/f193c689442f4fa29ecefce883829e39.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f193c689442f4fa29ecefce883829e39.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/90c8c4cefa9e4c4fbd67b6c20c7f9a58.jpg',
        sm:
          'http://content.homenetiol.com/640x480/90c8c4cefa9e4c4fbd67b6c20c7f9a58.jpg',
        md:
          'http://content.homenetiol.com/640x480/90c8c4cefa9e4c4fbd67b6c20c7f9a58.jpg',
        lg:
          'http://content.homenetiol.com/640x480/90c8c4cefa9e4c4fbd67b6c20c7f9a58.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f1a79ea023a34d5d8dad3de40013e18d.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f1a79ea023a34d5d8dad3de40013e18d.jpg',
        md:
          'http://content.homenetiol.com/640x480/f1a79ea023a34d5d8dad3de40013e18d.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f1a79ea023a34d5d8dad3de40013e18d.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/0d7300810379497d99454be9d7357e02.jpg',
        sm:
          'http://content.homenetiol.com/640x480/0d7300810379497d99454be9d7357e02.jpg',
        md:
          'http://content.homenetiol.com/640x480/0d7300810379497d99454be9d7357e02.jpg',
        lg:
          'http://content.homenetiol.com/640x480/0d7300810379497d99454be9d7357e02.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/d780d2986c314123a00cfbffcfc9f2ee.jpg',
        sm:
          'http://content.homenetiol.com/640x480/d780d2986c314123a00cfbffcfc9f2ee.jpg',
        md:
          'http://content.homenetiol.com/640x480/d780d2986c314123a00cfbffcfc9f2ee.jpg',
        lg:
          'http://content.homenetiol.com/640x480/d780d2986c314123a00cfbffcfc9f2ee.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/d574bd5e250f48a58af670d57f6669ee.jpg',
        sm:
          'http://content.homenetiol.com/640x480/d574bd5e250f48a58af670d57f6669ee.jpg',
        md:
          'http://content.homenetiol.com/640x480/d574bd5e250f48a58af670d57f6669ee.jpg',
        lg:
          'http://content.homenetiol.com/640x480/d574bd5e250f48a58af670d57f6669ee.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/522c178bd03c49deb0cd51950835d930.jpg',
        sm:
          'http://content.homenetiol.com/640x480/522c178bd03c49deb0cd51950835d930.jpg',
        md:
          'http://content.homenetiol.com/640x480/522c178bd03c49deb0cd51950835d930.jpg',
        lg:
          'http://content.homenetiol.com/640x480/522c178bd03c49deb0cd51950835d930.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/960e69694dc8462eade0073009a2222d.jpg',
        sm:
          'http://content.homenetiol.com/640x480/960e69694dc8462eade0073009a2222d.jpg',
        md:
          'http://content.homenetiol.com/640x480/960e69694dc8462eade0073009a2222d.jpg',
        lg:
          'http://content.homenetiol.com/640x480/960e69694dc8462eade0073009a2222d.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/2ecaefe5156d468b8c41e02ced54e994.jpg',
        sm:
          'http://content.homenetiol.com/640x480/2ecaefe5156d468b8c41e02ced54e994.jpg',
        md:
          'http://content.homenetiol.com/640x480/2ecaefe5156d468b8c41e02ced54e994.jpg',
        lg:
          'http://content.homenetiol.com/640x480/2ecaefe5156d468b8c41e02ced54e994.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/532248b773584442baf65a1a05f8fc71.jpg',
        sm:
          'http://content.homenetiol.com/640x480/532248b773584442baf65a1a05f8fc71.jpg',
        md:
          'http://content.homenetiol.com/640x480/532248b773584442baf65a1a05f8fc71.jpg',
        lg:
          'http://content.homenetiol.com/640x480/532248b773584442baf65a1a05f8fc71.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/e4853955d364481f813b2a686bff8704.jpg',
        sm:
          'http://content.homenetiol.com/640x480/e4853955d364481f813b2a686bff8704.jpg',
        md:
          'http://content.homenetiol.com/640x480/e4853955d364481f813b2a686bff8704.jpg',
        lg:
          'http://content.homenetiol.com/640x480/e4853955d364481f813b2a686bff8704.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/f5a84f87935e4e6c83d1af7e10d422e9.jpg',
        sm:
          'http://content.homenetiol.com/640x480/f5a84f87935e4e6c83d1af7e10d422e9.jpg',
        md:
          'http://content.homenetiol.com/640x480/f5a84f87935e4e6c83d1af7e10d422e9.jpg',
        lg:
          'http://content.homenetiol.com/640x480/f5a84f87935e4e6c83d1af7e10d422e9.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/96f939265d0e4db8b1d53692571e921a.jpg',
        sm:
          'http://content.homenetiol.com/640x480/96f939265d0e4db8b1d53692571e921a.jpg',
        md:
          'http://content.homenetiol.com/640x480/96f939265d0e4db8b1d53692571e921a.jpg',
        lg:
          'http://content.homenetiol.com/640x480/96f939265d0e4db8b1d53692571e921a.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/3656cd1dd0234deab347549d1b116518.jpg',
        sm:
          'http://content.homenetiol.com/640x480/3656cd1dd0234deab347549d1b116518.jpg',
        md:
          'http://content.homenetiol.com/640x480/3656cd1dd0234deab347549d1b116518.jpg',
        lg:
          'http://content.homenetiol.com/640x480/3656cd1dd0234deab347549d1b116518.jpg'
      },
      hexCode: ''
    },
    {
      type: 'unknown',
      url: {
        thumb:
          'http://content.homenetiol.com/640x480/22270c47aa374d44855dbb3666cf59c3.jpg',
        sm:
          'http://content.homenetiol.com/640x480/22270c47aa374d44855dbb3666cf59c3.jpg',
        md:
          'http://content.homenetiol.com/640x480/22270c47aa374d44855dbb3666cf59c3.jpg',
        lg:
          'http://content.homenetiol.com/640x480/22270c47aa374d44855dbb3666cf59c3.jpg'
      },
      hexCode: ''
    }
  ],
  details: [
    {
      name: 'Base Curb Weight',
      value: '2888'
    },
    {
      name: 'Length, Overall',
      value: '176.9'
    },
    {
      name: 'Width, Max w/o mirrors',
      value: '70.8'
    },
    {
      name: 'Height, Overall',
      value: '54.9'
    }
  ],
  distance: 1750.5673587022319708700461059
}

storiesOf('Components|VehicleFeatures', module).add('content', () => (
  <VehicleFeatures vehicle={data} />
))
