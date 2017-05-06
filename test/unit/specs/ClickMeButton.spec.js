import Vue from 'vue'
import ClickMeButton from '@/components/ClickMeButton'

describe('ClickMeButton.vue', () => {
  let vm

  beforeEach(function () {
    // Given
    const config = {
      propsData: {
        message: 'Click Me Button'
      }
    }

    // When
    const Constructor = Vue.extend(ClickMeButton)

    // Then
    vm = new Constructor(config).$mount()
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
      // Given
      sinon.spy(vm, '$emit')

      // When
      vm.onButtonClick()

      // Then
      vm.$emit.calledWith('buttonHasBeenClicked')
    })

    it('should emit an event when button is clicked', () => {
      // given
      sinon.spy(vm, '$emit')
      const button = vm.$el.querySelector('button')

      // when
      button.click()

      // then
      vm.$emit.calledWith('buttonHasBeenClicked')
    })
  })
})
