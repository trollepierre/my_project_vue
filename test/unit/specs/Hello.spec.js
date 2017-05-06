import Vue from 'vue'
import ClickMeButton from '@/components/ClickMeButton'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  let vm

  beforeEach(function () {
    const Constructor = Vue.extend(Hello)
    vm = new Constructor().$mount()
  })

  it('should check that msg is Welcome to Your Vue.js App', () => {
    expect(vm.$data.msg).to.equal('Welcome to Your Vue.js App')
  })

  it('should render correct contents', () => {
    const data = {
      data: {
        msg: 'plop'
      }
    }
    const Constructor = Vue.extend(Hello)
    vm = new Constructor(data).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('plop')
  })

  it('should create a counter with value is zero', () => {
    expect(vm.$data.counter).to.equal(0)
  })

  it('should render counter with zero value', () => {
    expect(vm.$el.querySelector('.hello div.counter').textContent)
      .to.equal('0')
  })

  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('hello')
  })

  it('should include a clickMeButton', () => {
    let clickMeButton = vm.$options.components.ClickMeButton
    expect(clickMeButton).to.contain(ClickMeButton)
  })

  it('should define a message to put inside the clickMeButton', () => {
    expect(vm.$options.components.ClickMeButton.props).to.haveOwnProperty('message')
  })

  it('should verify textContent of the Click Me Button', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent)
      .to.equal('Increment counter')
  })

  describe('incrementCounter', function () {
    it('should increment the counter to 1', () => {
      vm.incrementCounter()
      expect(vm.$data.counter).to.equal(1)
    })

    it('should increment counter when button from ClickMeButton is clicked', () => {
      // given
      let button = vm.$el.querySelector('.clickMeButton button')

      // when
      button.click()

      // then
      expect(vm.$data.counter).to.equal(1)
    })
  })
})
