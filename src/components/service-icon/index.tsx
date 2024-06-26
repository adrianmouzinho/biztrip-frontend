import airplaneIcon from '@/assets/icons/airplane.svg'
import busIcon from '@/assets/icons/bus.svg'
import carIcon from '@/assets/icons/car.svg'
import hotelIcon from '@/assets/icons/hotels.svg'

import { Icon } from './styles'

type ServiceType = 'airway' | 'road' | 'hotel' | 'vehicle'

const serviceTypeMap: Record<ServiceType, string> = {
	airway: airplaneIcon,
	hotel: hotelIcon,
	road: busIcon,
	vehicle: carIcon,
}

interface ServiceIconProps {
	type: ServiceType
}

export function ServiceIcon({ type }: ServiceIconProps) {
	return <Icon src={serviceTypeMap[type]} alt={type} />
}
