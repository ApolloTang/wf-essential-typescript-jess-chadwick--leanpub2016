
interface myjQueryType {
  (selector: string): HTMLElement
  version: number
}


//       vvvvvvvvvvvvv----This does not work
const my$:myjQueryType = function(selector) {
  //
  // code to find Dom element by selector
  //
}
my$.version=1.23

const element = my$('#container') as unknown as myjQueryType
const version = my$.version







