import { check } from '../utils/auth'

function install (Vue, options = {}) {
    Vue.directive(options.name || 'my-auth', {
        bind(){
            console.log('binding')
        },
        update(){
            console.log('update')
        },
        inserted (el, binding) {
            if (!check(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        },
        componentUpdated(el, binding) {
            console.log("componentUpdated");
        },
        unbind() {
            console.log("unbind");
        }
    })
}

export default { install }