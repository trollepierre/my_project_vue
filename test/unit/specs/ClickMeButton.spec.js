import Vue from 'vue'
import ClickMeButton from '@/components/ClickMeButton'

describe('ClickMeButton.vue', () => {
  let vm

  beforeEach(function () {
    const Constructor = Vue.extend(ClickMeButton)
    vm = new Constructor().$mount()
  })

  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('clickMeButton')
  })

  it('should render button with text Click Me Button', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent)
      .to.equal('Click Me Button')
  })
})
