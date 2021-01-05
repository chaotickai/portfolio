// test('two plus two is four', () => {
//     expect(2+2).toBe(4)
// })

// test('the best flavor is grapefruit', ()=>{
//     function bestLaCroixFlavor(){
//         return 'grapefruit'
//     }
//     expect(bestLaCroixFlavor()).toBe('grapefruit')
// })

describe('Jack and Diane array tests', ()=>{
    const values = ['Jack', 'Diane']

    it('passes array1 conatining expected values', ()=>{
        expect(['Jack', 'Diane', 'George']).toEqual(expect.arrayContaining(values))
    })
    
    it('passes array2 conatining expected values', ()=>{
        expect(['Bill']).not.toEqual(expect.arrayContaining(values))
    })
    
    it('passes array2 conatining expected values', ()=>{     
        expect(['Diane', 'Jack']).toEqual(expect.arrayContaining(values))
    })
})
