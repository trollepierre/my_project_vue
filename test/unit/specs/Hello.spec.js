import Vue from 'vue'
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
    // Given
    const data = {
      data: {
        msg: 'plop'
      }
    }
    const Constructor = Vue.extend(Hello)

    // When
    vm = new Constructor(data).$mount()

    // Then
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('plop')
  })

  it('should create a counter with zero value', () => {
    expect(vm.$data.counter).to.equal(0)
  })

  it('should render counter with counter data value', () => {
    // Given
    const data = {
      data: {
        counter: 48
      }
    }
    const Constructor = Vue.extend(Hello)

    // When
    vm = new Constructor(data).$mount()

    // Then
    expect(vm.$el.querySelector('.hello div.counter').textContent)
      .to.equal('48')
  })

  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('hello')
  })
})
