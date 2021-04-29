//
// This function sum the values of length property in its input.
// However, if the property are of different type (eg array and
// string), it makes no sense to add the length of array to length
// of string. So we overload the function signature to make sure the
// function take same type of input.
//

function totalLength(x: string, y: string): number  // case one, both type are string
function totalLength(x: any[], y: any[]): number    // case two, both type are array
// The above two line are the expose overlaod. The following is the required by typescript
// syntax:
function totalLength(x: (string | any[]), y: (string | any[])): number {  //
  const total: number = x.length + y.length;
  return total;
}

// @ts-ignore
totalLength( )
         // ^
         // totalLength(x: string, y: string): number
         // —————————————————————————————————————————
         // totalLength(x: any[], y: any[]): number

totalLength([1], [2])
totalLength('myString', 'myString')

totalLength([1], 'myStringOne')
          //^^^^^^^^^^^^^^^
          //  [tsserver 2769] [E] No overload matches this call.
          //   Overload 1 of 2, '(x: string, y: string): number', gave the following error.
          //     Argument of type 'number[]' is not assignable to parameter of type 'string'.
          //   Overload 2 of 2, '(x: any[], y: any[]): number', gave the following error.
          //     Argument of type '"myStringOne"' is not assignable to parameter of type 'any[]'.


totalLength('myString', [2])
          //^^^^^^^^^^^^^^^
          //  [tsserver 2769] [E] No overload matches this call.
          //   Overload 1 of 2, '(x: string, y: string): number', gave the following error.
          //     Argument of type 'number[]' is not assignable to parameter of type 'string'.
          //   Overload 2 of 2, '(x: any[], y: any[]): number', gave the following error.
          //     Argument of type '"myString"' is not assignable to parameter of type 'any[]'.

