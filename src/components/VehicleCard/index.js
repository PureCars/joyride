import React from 'react'
import Card from '@material-ui/core/Card';
import { VehicleImage, Title, Details, PriceLine } from './styles'

const VehicleCard = ({ className, imageUrl, title, details, price, payment }) => (
    <Card className={className}>
        <VehicleImage alt="Test" src={ imageUrl } />
        <Title>{ title }</Title>
        <Details>{ details }</Details>
        <PriceLine>
            <div>{ price }</div>
            <div>{ payment }</div>
        </PriceLine>
    </Card>
)

export default VehicleCard