import Vue from 'vue'
import ClickMeButton from '@/components/ClickMeButton'

describe('ClickMeButton.vue', () => {
  let vm

  beforeEach(function () {
    let propsData = {
      message: 'Click Me Button'
    }
    const Constructor = Vue.extend(ClickMeButton)
    vm = new Constructor({ propsData }).$mount()
  })

  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('clickMeButton')
  })

  it('should render button with text Click Me Button', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent)
      .to.equal('Click Me Button')
  })

  describe('onButtonClick', function () {
    it('should emit click ', () => {
      sinon.spy(vm, '$emit')
      vm.onButtonClick()
      sinon.assert.calledWith(vm.$emit, 'buttonHasBeenClicked')
    })

    it('should bind onButtonClick when button is clicked', () => {
      // given
      sinon.spy(vm, '$emit')
      const button = vm.$el.querySelector('button')

      // when
      button.click()

      // then
      sinon.assert.calledOnce(vm.$emit)
    })
  })
})
