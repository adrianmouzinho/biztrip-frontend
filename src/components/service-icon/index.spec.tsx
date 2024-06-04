import { render } from '@testing-library/react'

import { ServiceIcon } from '.'

describe('Service Icon', () => {
	it('should display the right alt text based on service icon', () => {
		let wrapper = render(<ServiceIcon type="airway" />)

		expect(wrapper.getByAltText('airway')).toBeInTheDocument()

		wrapper = render(<ServiceIcon type="hotel" />)

		expect(wrapper.getByAltText('hotel')).toBeInTheDocument()

		wrapper = render(<ServiceIcon type="road" />)

		expect(wrapper.getByAltText('road')).toBeInTheDocument()

		wrapper = render(<ServiceIcon type="vehicle" />)

		expect(wrapper.getByAltText('vehicle')).toBeInTheDocument()
	})
})
