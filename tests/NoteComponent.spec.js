/* eslint-env jest */
import { mount } from '@vue/test-utils'
import NoteComponent from '../src/components/Note.vue'

/**
 * Passing an object as 'name' prop, we should see the name and the content displayed correctly
 */
test('[Note component] - note class should display note\'s prop', () => {
    const wrapper = mount(NoteComponent, {
        propsData: {
            note: {
                name: 'Name',
                content: 'Content'
            }
        }
    })
    expect(wrapper.find('.note').text()).toContain('Name')
    expect(wrapper.find('.note').text()).toContain('Content')
})

/**
 * Passing true as 'selected' prop, the class note should have also the class 'selected'
 */
test('[Note component] - note class should have selected class', () => {
    const wrapper = mount(NoteComponent, {
        propsData: {
            selected: true
        }
    })
    expect(wrapper.find('.note').classes('selected')).toBe(true)
})

/**
 * Passing null as 'selected' prop, the class note should NOT have the class 'selected'
 */
test('[Note component] - note class should NOT have selected class', () => {
    const wrapper = mount(NoteComponent, {
        propsData: {
            selected: null
        }
    })
    expect(wrapper.find('.note').classes('selected')).toBe(false)
})