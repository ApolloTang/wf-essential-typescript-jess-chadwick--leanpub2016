
// This interface define a function as an object

interface myjQueryType {
  (selector: string): HTMLElement
  version: number
}


const my$ = function(selector) {
  //
  // code to find Dom element by selector
  //
} as myjQueryType  // <-- cast this function as a function object
my$.version=1.23   // <-- adding property to function


const element = my$('#container') as unknown as myjQueryType
element.version

//             interlisense will popup, if not hit <c-space>
//             |
//             v
//     element.
//             version             m [TSC]  <---- property is now available in dropdown
//             bind~               f [TSC]
//             call~               f [TSC]
//             apply~              f [TSC]
//             caller              m [TSC]
//


