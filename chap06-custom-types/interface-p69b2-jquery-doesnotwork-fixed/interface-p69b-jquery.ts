
interface myjQueryType {
  (selector: string): HTMLElement
  version: number
}


const my$ = function(selector) {
  //
  // code to find Dom element by selector
  //
} as myjQueryType
my$.version=1.23

const element = my$('#container')
const version = my$.version







