const listModels = function (brand){
  let models
  switch (brand){
    case 'بی ام و':
       models ={
         title: 'مدل خودرو را انتخاب کنید',
         items: [
           {
             name: 'x3',
             id:36,
             step: 1,
           },
         {
           name: 'x6',
           id:37,
           step: 1,
         },
       ]
         }
      break
    case 'برلیانس' :
      models={
        title: 'مدل خودرو را انتخاب کنید',
        items:[
        {
          name: 'H330',
          id:39,
          step: 1,
        }
      ]}
      break
    case 'پراید':
      models ={
        title: 'مدل خودرو را انتخاب کنید',
        items:[
        {
          name: 'SE',
          id:40,
          step: 1,
        }
      ]}
      break
    case 'پژو':
      models={
        title: 'مدل خودرو را انتخاب کنید',
        items:[
        {
          name: 'پارس',
          id: 41,
          step: 1,
        },
        {
          name: '405',
          id: 42,
          step: 1,
        },
        {
          name: 'SLX',
          id: 43,
          step: 1,
        },
      ]}
      break
    case 'تویوتا':
      models={
        title: 'مدل خودرو را انتخاب کنید',
        items:[
        {
          name: 'کمری',
          id: 44,
          step: 1,
        },
        {
          name: 'لندکروز',
          id: 45,
          step: 1,
        }
      ]}
      break
    default:
      models={
        title: 'مدل خودرو را انتخاب کنید',
        items:[
        {
          name: 'تیبا 2',
          id: 46,
          step: 1,
        }
      ]}
      break
  }
  return models
}
export default listModels
