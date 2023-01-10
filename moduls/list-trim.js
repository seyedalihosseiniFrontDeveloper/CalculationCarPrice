const listTrim = function (model){
  let trims
  switch (model){
    case 'x3':
      trims ={
        title: 'تریم خودرو را انتخاب کنید',
        items: [
          {
            name: 'فول آپشن',
            id:3366,
            step: 2,
          },
          {
            name: 'استاندارد',
            id:37,
            step: 2,
          },
        ]
      }
      break
    case 'پارس' :
      trims={
        title: 'تریم خودرو را انتخاب کنید',
        items:[
          {
            name: 'سال',
            id:39,
            step: 2,
          }
        ]}
      break
    case 'SE':
      trims ={
        title: 'تریم خودرو را انتخاب کنید',
        items:[
          {
            name: 'تیپ 2',
            id:40,
            step: 2,
          }
        ]}
      break
    case 'SLX':
      trims={
        title: 'تریم خودرو را انتخاب کنید',
        items:[
          {
            name: 'داشبورد جدید',
            id: 41,
            step: 2,
          },
          {
            name: 'موتور 2000',
            id: 42,
            step: 2,
          },
          {
            name: 'SLX',
            id: 43,
            step: 2,
          },
        ]}
      break
    default:
      trims={
        title: 'تریم خودرو را انتخاب کنید',
        items:[
          {
            name: 'تیپ 2',
            id: 456,
            step: 2,
          }
        ]}
      break
  }
  return trims
}
export default listTrim
