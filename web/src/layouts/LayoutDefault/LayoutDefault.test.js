import { render } from '@redwoodjs/testing'

import LayoutDefault from './LayoutDefault'

describe('LayoutDefault', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LayoutDefault />)
    }).not.toThrow()
  })
})
