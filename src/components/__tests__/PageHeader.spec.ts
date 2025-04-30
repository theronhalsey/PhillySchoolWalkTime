import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PageHeader from '../PageHeader.vue'

describe('PageHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(PageHeader, { props: { msg: 'Fancy Words!' } })
    expect(wrapper.text()).toContain('Fancy Words!')
  })
})
